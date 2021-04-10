import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './NavBar'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'


function App() {

  const [user, setUser] = useState(null)

  function userLogout() {
    setUser(null)
  }

  return (
    <div>
      <NavBar user={user} userLogout={userLogout} />
      <h1>This is the app component</h1>
      <Switch>
        <Route exact path="/login">
          <Login setUser={setUser}/>
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
