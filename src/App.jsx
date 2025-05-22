import React, { useState, useEffect } from 'react';
import MoodSelector from './components/MoodSelector';
import PlaylistViewer from './components/PlaylistViewer';
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  const [mood, setMood] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 dark:text-white transition-colors">
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <h1 className="text-3xl font-bold mb-4">🎵 Mood Music Player</h1>
      {!mood ? (
        <MoodSelector onMoodSelect={setMood} />
      ) : (
        <PlaylistViewer mood={mood} onReset={() => setMood(null)} />
      )}
    </div>
  );
}
