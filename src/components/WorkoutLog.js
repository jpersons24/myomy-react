import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ExerciseLog from './ExerciseLog';
import { removeWorkout } from '../redux/workoutSlice';
import Table from 'react-bootstrap/Table'

function WorkoutLog({ user }) {

   const dispatch = useDispatch()
   // get workouts from redux store
   let workouts = useSelector((state) => state.workout.workouts)

   // handle delete button click
   function handleClick(e, workout) {
      console.log(e.target)
      console.log(workout)

      // remove workout object from state
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

      return (
         <>
            <tbody key={workout.id}>
               <tr>
                  <td>{workout.date}</td>
                  <td>{workout.workout_type}</td>
                  <td>{workout.duration}</td>
               </tr>
            </tbody>
            <button onClick={(e) => handleClick(e, workout)}>Remove Workout</button>
            <ExerciseLog workout={workout} />
         </>
      )
   })

   return (
      <div>
         <h2>{user.username}'s Workouts</h2>
         <p>Add filter feature that display only workouts from current month.</p>
         {/* {workout_components} */}
         <Table striped bordered size="lg">
            <thead>
               <tr>
                  <th>Date</th>
                  <th>Workout Type</th>
                  <th>Duration (minutes)</th>
               </tr>
            </thead>
            {workout_components}
         </Table>
      </div>
   )
}

export default WorkoutLog

const WorkoutWrapper = styled.div`
   margin: 50px;
   justify-content: space-between;
`

