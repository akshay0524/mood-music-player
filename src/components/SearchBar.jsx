import React from 'react';

export default function SearchBar({ query, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search playlists..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
      className="mb-4 p-2 border rounded w-full max-w-md dark:bg-gray-700 dark:text-white"
    />
  );
}
