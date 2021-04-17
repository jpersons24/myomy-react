import { useState } from 'react';
import styled from 'styled-components';
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
      <Wrapper>
         <Container>
            <Welcome>
               <img src={user.profile_img} alt="Sorry nothing to display, edit your profile!" style={{height: "100px", marginRight: "10px"}} />
               <h2>Welcome, {user.username}!</h2>
            </Welcome>
            <WorkoutForm user={user} />
            <MealForm user={user} />
            <div>
               <button style={{width: "200px"}} onClick={handleWorkoutClick}>
                  {!showWorkouts ? 'See your workouts' : 'Hide your workouts'}
               </button>
               <button style={{width: "200px"}} onClick={handleMealsClick}>
                  {!showMeals ? 'See your meals' : 'Hide your meals'}
               </button>
            </div>
         </Container>
         <br></br>
         <br></br>
         <br></br>
         
         {!showWorkouts ? null :
         <WorkoutLog user={user} />}
         {!showMeals ? null :
         <MealLog user={user} />}
      </Wrapper>
   )
}

export default Home;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 20px;
`

const Welcome = styled.div`
   display: flex;
   flex-flow: flex-start wrap;
   align-items: center;
   margin: 40px;
`

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`