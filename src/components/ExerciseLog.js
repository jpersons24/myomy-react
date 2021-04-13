import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExercise } from '../redux/exerciseSlice'
import ExerciseShow from './ExerciseShow'


function ExerciseLog({ workout }) {
   
   const dispatch = useDispatch()
   const [show, setShow] = useState(false)
   const [formData, setFormData] = useState({
      name: "",
      sets: 0,
      repetitions: 0,
   })

   function handleClick(e) {
      // set show to opposite of current value
      setShow((show) => !show)
   }

   function handleChange(e) {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      })
   }

   function handleSubmit(e) {
      e.preventDefault()

      // create new exercise object
      const newExercise = {
         name: formData.name,
         sets: formData.sets,
         repetitions: formData.repetitions,
         workout_id: workout.id,
      }
      
      // POST /exercises
      fetch('http://localhost:4000/exercises', {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newExercise),
      })
      .then(res => res.json())
      .then(exercise => {
         const action = addExercise(exercise)
         dispatch(action)
      })

      // reset form input fields
      setFormData({
         name: "",
         sets: 0,
         repetitions: 0,
      })
   }

   return (
      <div>
         {show ? 
         <>
         <button onClick={handleClick}>Hide Exercises</button>
         <form onSubmit={handleSubmit}>
            <label>Exercise Name: </label>
            <input
               type="input"
               name="name"
               value={formData.name}
               onChange={handleChange}
            />
            <label># of Sets: </label>
            <input 
               type="number"
               name="sets"
               value={formData.sets}
               onChange={handleChange}
            />
            <label># of Reps per Set: </label>
            <input
               type="number"
               name="repetitions"
               value={formData.repetitions}
               onChange={handleChange} 
            />
            <input type="submit" value="Add Exercise"/>
         </form>
         <ExerciseShow workout={workout} />
         </>
         :
         <button onClick={handleClick}>Show Exercises</button>
         }
      </div>
   )
};

export default ExerciseLog;