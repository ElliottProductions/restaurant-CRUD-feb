import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
  
}

export async function logout() {
  await client.auth.signOut();
  
  return window.location.href = '../';
}
  