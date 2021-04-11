import { useState } from 'react'

function Home({ user }) {
   
   // state variable containing form data
   // form data will be passed into POST request
   const [formData, setFormData] = useState({
      date: "",
      duration: "",
      workoutType: "",
   })
   // console.log(user)
   console.log(formData)

   function handleInput(e) {
      console.log((e.target.value))
      setFormData({
         ...formData,
         [e.target.name]: e.target.value 
      })
   }

   function getCurrentWeek () {
      let curr = new Date 
      let week = []

      for (let i = 0; i <= 7; i++) {
         let first = curr.getDate() - curr.getDay() + i 
         let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
         week.push(day)
      }
      return week
   }
   debugger
   getCurrentWeek()
   
   return (
      <div>
         <h1>Welcome, {user.username}!</h1>
         <div>
            <h4>What did you do today?</h4>
            <form>
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
            </form>
         </div>
      </div>
   )
}

export default Home;