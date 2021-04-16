import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'


function ExerciseShow({ workout }) {

   const exercises = useSelector((state) => state.exercise.exercises);

   // filter exercises belonging to workout
   const filteredExercises = exercises.filter(exercise => exercise.workout_id === workout.id);
   
   // map through filtered exercises
   const exerciseComponents = filteredExercises.map((exercise) => {

      return (
         <>
            <tbody key={exercise.id}>
               <tr>
                  <td>{exercise.name}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.repetitions}</td>
               </tr>
            </tbody>
         </>
      )
   });

   return(
      <div>
         <Table striped bordered variant="dark" size="sm">
            <thead>
               <tr>
                  <th>Exercise</th>
                  <th>Sets</th>
                  <th>Repetitions</th>
               </tr>
            </thead>
            {exerciseComponents}     
         </Table>
      </div>
   )
};

export default ExerciseShow;