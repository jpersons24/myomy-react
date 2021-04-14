import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addWorkout } from '../redux/workoutSlice'
import WorkoutLog from "./WorkoutLog";

function Home({ user }) {

   const dispatch = useDispatch()
   
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
      .then(res => res.json())
      .then(workout => {
         const action = addWorkout(workout)
         dispatch(action)
      })

      // reset form fields
      setFormData({
         date: "",
         duration: "",
         workoutType: "",
      })
   }
   
   return (
      <Wrapper>
         <Welcome>
            <img src={user.profile_img} alt="Sorry nothing to display, edit your profile!" style={{height: "100px", marginRight: "10px"}} />
            <h2>Welcome, {user.username}!</h2>
         </Welcome>
         <FormContainer>
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
               <input type="submit" />
            </form>
         </FormContainer>
         
         <WorkoutLog user={user} />
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
`

const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`