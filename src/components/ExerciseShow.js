import { useSelector } from 'react-redux';


function ExerciseShow({ workout }) {

   const exercises = useSelector((state) => state.exercise.exercises);

   // filter exercises belonging to workout
   const filteredExercises = exercises.filter(exercise => exercise.workout_id === workout.id);
   
   // map through filtered exercises
   const exerciseComponents = filteredExercises.map((exercise) => {
      return (
         <div key={exercise.id}>
            <ul style={{listStyle: "none"}}>
               <li>{exercise.name}</li>
               <li>
                  <ul>
                     <li>Sets: {exercise.sets}</li>
                     <li>Sets: {exercise.repetitions}</li>
                  </ul>
               </li>
            </ul>
         </div>
      )
   });

   return(
      <div>
         {exerciseComponents}
      </div>
   )
};

export default ExerciseShow;