import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
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
            null
            // activity feed will go here (displaying other users activity, giving ability to leave post)
         }
         
         {!showWorkouts ? null :
         <WorkoutLog user={user} />}
         {!showMeals ? null :
         <MealLog user={user} />}
      </div>
   )
}

export default Home;

