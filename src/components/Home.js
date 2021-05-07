import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import WorkoutLog from "./WorkoutLog";
import MealLog from './MealLog';
import WorkoutForm from './WorkoutForm';
import MealForm from './MealForm';



function Home({ user }) {

   const [showWorkouts, setShowWorkouts] = useState(false)
   const [showMeals, setShowMeals] = useState(false)

   function handleWorkoutClick(e) {
      setShowWorkouts((showWorkouts) => !showWorkouts)
   }

   function handleMealsClick(e) {
      setShowMeals((showMeals) => !showMeals)
   }
   
   return (
      <div className="home">
         {!user ?
            <div className="container">
               <Alert variant="danger">
                  <Alert.Heading className="alert-heading">
                     You must login or signup to use MyoMy!
                  </Alert.Heading>
                  <ButtonGroup className="btn-group" size="lg">
                     <Button className="btn-alert" href="/login">Login</Button>
                     <Button className="btn-alert" href="/signup">Signup</Button>
                  </ButtonGroup>
               </Alert>
            </div>
         :
         <>
            <div className="container-home" fluid>
               <div className="row" md="1">
                  <img src={user.profile_img} alt="Sorry nothing to display, edit your profile!" style={{height: "100px", marginRight: "10px"}} />
                  <h2>Welcome, {user.username}!</h2>
               </div>
               <div>
                  <WorkoutForm user={user} />
                  <MealForm user={user} />
               </div>
               <div>
                  <button style={{width: "200px"}} onClick={handleWorkoutClick}>
                     {!showWorkouts ? 'See your workouts' : 'Hide your workouts'}
                  </button>
                  <button style={{width: "200px"}} onClick={handleMealsClick}>
                     {!showMeals ? 'See your meals' : 'Hide your meals'}
                  </button>
               </div>
            </div>
         </>
         }
         
         {!showWorkouts ? null :
         <WorkoutLog user={user} />}
         {!showMeals ? null :
         <MealLog user={user} />}
      </div>
   )
}

export default Home;

