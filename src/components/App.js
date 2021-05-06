import { Switch, Route, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWorkouts } from '../redux/workoutSlice';
import { setExercises } from '../redux/exerciseSlice';
import { setMeals } from '../redux/mealSlice';
import { setFoods } from '../redux/foodSlice';
import '../App.css';
import NavBar from './NavBar';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Home from './Home';


function App() {

  const history = useHistory()
  const dispatch = useDispatch()

  const [user, setUser] = useState(null)
  console.log("Current User", user)

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

  useEffect(() => {
    // GET /meals
    fetch('http://localhost:4000/meals')
    .then(res => res.json())
    .then(meals => {
      const action = setMeals(meals)
      dispatch(action)
    })
  }, [dispatch])

  useEffect(() => {
    fetch("http://localhost:4000/foods")
    .then(res => res.json())
    .then(foods => {
      const action = setFoods(foods)
      dispatch(action)
    })
  }, [dispatch])

  function userLogout() {
    setUser(null)
    history.push("/login")
  }

  return (
    // need another container
    
    <div className="app-wrapper">
      <NavBar user={user} userLogout={userLogout} />
      <Switch>
        <Route exact path="/login">
          <Login setUser={setUser}/>
        </Route>
        <Route exact path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route exact path="/profile">
          {user ? <Profile user={user} setUser={setUser} /> : "You must log in to see this page!"}
        </Route>
        <Route exact path="/home">
          {user ? <Home user={user} /> : "You must log in to see this page!"}
        </Route>
      </Switch>
    </div>
  )
}

export default App;


