import { Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../redux/userSlice.js'
import NavBar from './NavBar.js'


function App() {

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser)
  console.log(currentUser)

  // fetch users --> there is only one user right now
  useEffect(() => {
    fetch("http://localhost:4000/users")
    .then(res => res.json())
    .then(data => {
      const action = setCurrentUser(data)
      dispatch(action)
    })
  }, [dispatch]);


  return (
    <div>
      <NavBar />
      <div>
        <h1>This is the app component</h1>
        <ul>
          <li>Start with NavBar for easy navigation</li>
          <li>Set up components on the go</li>
          <li>styling technologies, home page, signup/sign in</li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/home">
          {/* <Home /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
