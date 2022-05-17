import React from 'react';
import { Link } from 'react-router-dom';

export default function Song({ song }) {
  return (
    <Link to={`/items/${song.id}`}>
      <div className="display-song">
        <h3>{song.name}</h3>
        <p>{song.genre}</p>
        <p>{song.album}</p>
        <p>{song.year}</p>
      </div>
    </Link>
  );
}
