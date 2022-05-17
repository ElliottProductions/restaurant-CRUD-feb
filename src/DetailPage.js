import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSongByID, updateSong } from './services/fetch-utils';

export default function DetailPage() {

  const history = useHistory();
  const match = useRouteMatch();

  const [name, setName] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState(1991);
  const [genre, setGenre] = useState('Post-Punk');
  const songID = match.params.id;

  useEffect(() => {
    async function fetch() {
      const songResponse = await getSongByID(match.params.id);

      setName(songResponse.name);
      setAlbum(songResponse.album);
      setYear(songResponse.year);
      setGenre(songResponse.genre);
    }

    fetch();
  }, [match]);

  async function handleSubmit(e) {
    e.preventDefault();

    await updateSong({
      name,
      album,
      year,
      genre,
      songID
    });
    history.push('/items');
  }

  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>{genre}</p>
        <p>{album}</p>
        <p>{year}</p>
      </div>
      <div className="create-overform">
        <form onSubmit={handleSubmit} className="create-form">
          <h2>Add a new Song</h2>
          <label>Song name: 
            <input required value={name} onChange={e => setName(e.target.value)} name='name' />
          </label>
          <label>
            Genre:
            <select required value={genre} onChange={e => setGenre(e.target.value)}>
              <option>Post-Punk</option>
              <option>Cyberpunk</option>
              <option>Cow-Punk</option>
              <option>Pop-Punk</option>
              <option>Folk-Punk</option>
              <option>Punk-Punk</option>
            </select>
          </label>
          <label>Album name: 
            <input required onChange={e => setAlbum(e.target.value)} value={album} name='name' />
          </label>
          <label>Year released: 
            <input required onChange={e => setYear(e.target.value)} value={year} type='number' name='name' />
          </label>
        
          <button>Update song</button>
        </form>

      </div>
    </>
  );
}
