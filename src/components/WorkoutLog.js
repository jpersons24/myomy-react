function WorkoutLog({ user }) {

   console.log(user.workouts)

   user.workouts.sort(function(a, b) {
      return new Date(a.date) - new Date(b.date)
   })

   const workout_components = user.workouts.map((workout) => {
      return (
         <div key={workout.id}>
            <ul style={{listStyleType: 'none'}}>
               <li>Date: {workout.date}</li>
               <li>Duration: {workout.duration} minutes</li>
               <li>Workout Style: {workout.workout_type}</li>
            </ul>
         </div>
      )
   })

   return (
      <div>
         <h3>Previous Workouts</h3>
         {workout_components}
      </div>
   )
}

export default WorkoutLog