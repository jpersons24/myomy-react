import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ExerciseLog from './ExerciseLog';
import { removeWorkout } from '../redux/workoutSlice';

function WorkoutLog({ user }) {

   const dispatch = useDispatch()
   // get workouts from redux store
   let workouts = useSelector((state) => state.workout.workouts)

   // handle delete button click
   function handleClick(e, workout) {
      console.log(e.target)
      console.log(workout)

      // use dispatch to:
      // call remove workout action from workout Redux state
      const action = removeWorkout(workout)
      dispatch(action)

      // DELETE /workouts/:id
      fetch(`http://localhost:4000/workouts/${workout.id}`, {
         method: "DELETE",
      })
   }

   // filtering through workouts for current user's workouts
   const userWorkouts = workouts.filter((workout) => {
      return workout.user_id === user.id
   })

   // sort userWorkouts by date
   let sorted_workouts = userWorkouts.sort(function(a, b) {
      return new Date(a.date) - new Date(b.date)
   })

   // mapping through sorted_workouts for display components
   const workout_components = sorted_workouts.map((workout) => {

      // let workout_id = workout.id
      // console.log(workout_id)

      return (
         <WorkoutWrapper key={workout.id}>
            <ul style={{listStyleType: 'none'}}>
               <li>Date: {workout.date}</li>
               <li>Duration: {workout.duration} minutes</li>
               <li>Workout Style: {workout.workout_type}</li>
               <li><button onClick={(e) => handleClick(e, workout)}>Remove Workout</button></li>
               <li><ExerciseLog workout={workout} /></li>
            </ul>
         </WorkoutWrapper>
      )
   })

   return (
      <div>
         <h2>{user.username}'s Workouts (from this month)</h2>
         <p>Add filter feature that display only workouts from current month.</p>
         <p>OR</p>
         <p>Carousel / Accordion / another feature to dislplay firs x amount of workouts</p>
         {workout_components}
      </div>
   )
}

export default WorkoutLog

const WorkoutWrapper = styled.div`
   margin: 50px;
   justify-content: space-between;
`

