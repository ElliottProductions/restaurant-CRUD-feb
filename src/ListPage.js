import React from 'react';
import Song from './Song';
import { useEffect, useState } from 'react';
import { getSongs } from './services/fetch-utils';

export default function ListPage() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetch() {
      const fetchedSongs = await getSongs();

      setSongs(fetchedSongs);
  


    }

    fetch();
  }, []);


  return (
    <div>
      {songs.map(song => <Song key={song.id} song={song}/>)}
    </div>
  );
}
