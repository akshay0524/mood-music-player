import React from 'react';

const moods = [
  { emoji: '😀', label: 'Happy' },
  { emoji: '😢', label: 'Sad' },
  { emoji: '😎', label: 'Cool' },
  { emoji: '💪', label: 'Workout' },
  { emoji: '💤', label: 'Relax' },
  { emoji: '🧠', label: 'Focus' },
];

export default function MoodSelector({ onMoodSelect }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {moods.map((mood) => (
        <button
          key={mood.label}
          onClick={() => onMoodSelect(mood.label)}
          className="bg-white shadow p-6 rounded text-4xl hover:bg-gray-200"
        >
          {mood.emoji}
          <div className="text-sm mt-2">{mood.label}</div>
        </button>
      ))}
    </div>
  );
}
