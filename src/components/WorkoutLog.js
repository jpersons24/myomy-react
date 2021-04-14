import { useSelector } from 'react-redux'
import ExerciseLog from './ExerciseLog'

function WorkoutLog({ user }) {

   // get workouts from redux store
   let workouts = useSelector((state) => state.workout.workouts)

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
      return (
         <div key={workout.id}>
            <ul style={{listStyleType: 'none'}}>
               <li>Date: {workout.date}</li>
               <li>Duration: {workout.duration} minutes</li>
               <li>Workout Style: {workout.workout_type}</li>
               <li><ExerciseLog workout={workout} /></li>
            </ul>
         </div>
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