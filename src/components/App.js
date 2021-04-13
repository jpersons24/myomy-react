import { Switch, Route, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setWorkouts } from '../redux/workoutSlice'
import { setExercises } from '../redux/exerciseSlice'
import NavBar from './NavBar'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import Home from './Home'


function App() {

  const history = useHistory()
  const dispatch = useDispatch()

  const [user, setUser] = useState(null)

  useEffect(() => {
    // GET /me request
    fetch('http://localhost:4000/me')
      .then(res => res.json())
      .then(user => {
        setUser(user)
        history.push("/home")
      })
  }, [history])

  useEffect(() => {
    // GET /workouts
    fetch('http://localhost:4000/workouts')
    .then(res => res.json())
    .then(workouts => {
      const action = setWorkouts(workouts)
      dispatch(action)
    })
  }, [dispatch])

  useEffect(() => {
    // GET /exercises
    fetch('http://localhost:4000/exercises')
    .then(res => res.json())
    .then(exercises => {
      const action = setExercises(exercises)
      dispatch(action)
    })
  }, [dispatch])

  function userLogout() {
    setUser(null)
    history.push("/login")
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
          {user ? <Profile user={user} setUser={setUser} /> : "You must log in to see this page!"}
        </Route>
        <Route exact path="/home">
          {user ? <Home user={user} /> : "You must log in to see this page!"}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
