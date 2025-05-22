import React from 'react';

const samplePlaylists = {
  Happy: [
    { name: 'Feel Good Hits', url: 'https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC' },
    { name: 'Happy Beats', url: 'https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0' },
    { name: 'Mood Booster', url: 'https://open.spotify.com/playlist/37i9dQZF1DWSf2RDTDayIx' },
  ],
  Sad: [
    { name: 'Life Sucks', url: 'https://open.spotify.com/playlist/37i9dQZF1DX3YSRoSdA634' },
    { name: 'Sad Indie', url: 'https://open.spotify.com/playlist/37i9dQZF1DWSqBruwoIXkA' },
    { name: 'Rainy Day Blues', url: 'https://open.spotify.com/playlist/37i9dQZF1DXbvABJXBIyiY' },
  ],
  Cool: [
    { name: 'Lo-Fi Vibes', url: 'https://open.spotify.com/playlist/37i9dQZF1DXdbXrPNafg9d' },
    { name: 'Chill Hop', url: 'https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT' },
    { name: 'Urban Cool', url: 'https://open.spotify.com/playlist/37i9dQZF1DX2aneNMeYHQ8' },
  ],
  Workout: [
    { name: 'Beast Mode', url: 'https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP' },
    { name: 'Power Workout', url: 'https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh' },
    { name: 'Run Wild', url: 'https://open.spotify.com/playlist/37i9dQZF1DXdxcBWuJkbcy' },
  ],
  Relax: [
    { name: 'Calm Vibes', url: 'https://open.spotify.com/playlist/37i9dQZF1DX3PIPIT6lEg5' },
    { name: 'Acoustic Chill', url: 'https://open.spotify.com/playlist/37i9dQZF1DWYVURwQHUqnN' },
    { name: 'Zen Garden', url: 'https://open.spotify.com/playlist/37i9dQZF1DWU0ScTcjJBdj' },
  ],
  Focus: [
    { name: 'Deep Focus', url: 'https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ' },
    { name: 'Coding Mode', url: 'https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS' },
    { name: 'Study Time', url: 'https://open.spotify.com/playlist/37i9dQZF1DWUZ5bk6qqDSy' },
  ],
};

export default function PlaylistViewer({ mood, onReset }) {
  const playlists = samplePlaylists[mood] || [];

  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4">Playlists for "{mood}" mood</h2>
      <ul className="space-y-2">
        {playlists.map((pl) => (
          <li key={pl.name}>
            <a
              href={pl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white shadow p-4 rounded hover:bg-green-100 text-blue-600 font-medium"
            >
              {pl.name}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={onReset} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        🔁 Pick Another Mood
      </button>
    </div>
  );
}
