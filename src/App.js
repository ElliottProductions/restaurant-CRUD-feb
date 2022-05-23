import './App.css';
import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import CreatePage from './CreatePage';
import AuthPage from './AuthPage';

function App() {
  const [user, setUser] = useState('');

  // add a useEffect to get the user and inject the user object into state on load
  useEffect(() => {
    async function fetch() {
      const user = await getUser();
      if (user) setUser(user);
    }
    
    fetch();
  
  }, []);

  async function handleLogout() {
    // call the logout function
    await logout();
    // clear the user in state
    setUser('');
  }
  return (
    <Router>
      <div className='App'>
        { user ? <header>
          <NavLink activeClassName='active-link' to="/items">Song List</NavLink>
          <br></br>
          <NavLink activeClassName='active-link' to="/create">Create Page</NavLink>
          <br></br>
          <button onClick={handleLogout}>Logout</button>
        </header> : <></>}
        <Switch>
          <Route exact path='/'>
            { user
              ? <Redirect to="/items"/>
              : <AuthPage setUser={setUser}/>
            }
          </Route>
          <Route exact path='/items'>
            { user
              ? <ListPage />
              : <Redirect to="/"/>
            }
          </Route>
          <Route exact path='/items/:id'>
            { user
              ? <DetailPage />
              : <Redirect to="/"/>
            }
          </Route>
          <Route exact path='/create'>
            { user
              ? <CreatePage />
              : <Redirect to="/"/>
            }
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
