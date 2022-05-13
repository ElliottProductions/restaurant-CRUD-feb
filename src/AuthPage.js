import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage(props) {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
      
    const user = await signIn(signInEmail, signInPassword);
    props.setUser(user);
  }
    
  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUp(signUpEmail, signUpPassword);

    props.setUser(user);
  }

  return (
    <div className='auth'>
      <h1><em>Boardzo</em></h1>
      <form onSubmit={handleSignUp}>
        <label>
            Email
          <input required type="email" onChange={e => setSignUpEmail(e.target.value)} name="email" />
        </label>
        <label>
            Password
          <input required type="password" onChange={e => setSignUpPassword(e.target.value)} name="password" />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <label>
            Email
          <input required type="email" onChange={e => setSignInEmail(e.target.value)} name="email" />
        </label>
        <label>
            Password
          <input required type="password" onChange={e => setSignInPassword(e.target.value)} name="password" />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}