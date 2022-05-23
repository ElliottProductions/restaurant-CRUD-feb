import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
  
}

export async function logout() {
  await client.auth.signOut();
  
  return window.location.href = '../';
}

export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}

export async function getSongs() {
  const response = await client
    .from('inventory')
    .select();
  
  
  return response.body;    
}

export async function createSong(song){
  const response = await client
    .from('inventory')
    .insert([song]);
  
  return checkError(response);
}
  
export async function getSongByID(id) {
  const response = await client
    .from('inventory')
    .select()
    .match({ id })
    .single();
  
  return response.body;    
}

export async function updateSong({ name, album, year, genre, songID }) {
  const response = await client
    .from('inventory')
    .update({ name: name,
      album: album,
      year: year,
      genre: genre })
    .match({ id: songID });
  
  
  return checkError(response);    
}
  