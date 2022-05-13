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
  
  