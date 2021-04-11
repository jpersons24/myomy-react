import { useState } from 'react'
import WorkoutLog from "./WorkoutLog";

function Home({ user }) {
   
   const [formData, setFormData] = useState({
      date: "",
      duration: "",
      workoutType: "",
   })
   

   function handleInput(e) {
      // console.log((e.target.value))
      setFormData({
         ...formData,
         [e.target.name]: e.target.value 
      })
   }

   function handleSubmit(e) {
      e.preventDefault()
      // create new workout object
      const newWorkout = {
         date: formData.date,
         duration: formData.duration,
         workout_type: formData.workoutType,
         user_id: user.id,
      }

      // POST /localhost/workouts
      fetch('http://localhost:4000/workouts', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newWorkout)
      })
      setFormData({
         date: "",
         duration: "",
         workoutType: "",
      })
   }
   
   return (
      <div>
         <h1>Welcome, {user.username}!</h1>
         <div>
            <h4>What did you do today?</h4>
            <form onSubmit={handleSubmit}>
               <label>Date: </label>
               <input 
                  type="date"
                  name="date"
                  value={formData.date}
                  onInput={handleInput}
               />
               <label>Duration: </label>
               <input
                  type="input"
                  name="duration"
                  placeholder="in minutes"
                  value={formData.duration}
                  onChange={handleInput} 
               />
               <label>Workout Type: </label>
               <input
                  type="input"
                  name="workoutType"
                  placeholder="cardio, weights, intervals..."
                  value={formData.workoutType}
                  onChange={handleInput} 
               />
               <br></br>
               <input type="submit" />
            </form>
         </div>
         <WorkoutLog user={user}/>
      </div>
   )
}

export default Home;