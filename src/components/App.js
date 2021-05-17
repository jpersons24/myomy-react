import { Switch, Route, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Alert from "react-bootstrap/Alert";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
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
    // set token using local storage
    const token = localStorage.getItem("token")

    // GET /me
    fetch('http://localhost:4000/me', {
      headers: { 
        Authorization: `Bearer ${token}`,
      }
    })
    .then((res) => {
      return res.json().then((data) => {
        if (res.ok) {
          return data;
        } else {
          throw data;
        }
      });
    })
    .then((user) => {
      // set user in state
      setUser(user)
    })
  }, [])

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

  return (
    // need another container

    <div className="app-wrapper">
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route exact path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route exact path="/profile">
          <Profile user={user} setUser={setUser} />
        </Route>
        <Route exact path="/home">
          <Home user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


