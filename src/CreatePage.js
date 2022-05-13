import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { createSong, getSongs } from './services/fetch-utils';

export default function CreatePage() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState(1991);
  const [genre, setGenre] = useState('Post-Punk');

  async function handleSubmit(e) {
    e.preventDefault();

    await createSong({
      name,
      album,
      year,
      genre
    });
    history.push('/items');
  }




  return (
    <div className="create-overform">
      <form onSubmit={handleSubmit} className="create-form">
        <h2>Add a new Song</h2>
        <label>Song name: 
          <input required onChange={e => setName(e.target.value)} name='name' />
        </label>
        <label>
            Genre:
          <select required onChange={e => setGenre(e.target.value)}>
            <option>Post-Punk</option>
            <option>Cyberpunk</option>
            <option>Cow-Punk</option>
            <option>Pop-Punk</option>
            <option>Folk-Punk</option>
            <option>Punk-Punk</option>
          </select>
        </label>
        <label>Album name: 
          <input required onChange={e => setAlbum(e.target.value)} name='name' />
        </label>
        <label>Year released: 
          <input required onChange={e => setYear(e.target.value)} value={year} type='number' name='name' />
        </label>
        
        <button>Create song</button>
      </form>

    </div>
  );
}
