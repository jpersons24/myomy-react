import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeal } from '../redux/mealSlice';

function MealForm({ user }) {

   const dispatch = useDispatch()
   const [formData, setFormData] = useState({
      date: "",
      name: "",
      description: "",
   });

   function handleInput(e) {
      console.log(e.target.value)
      setFormData({ ...formData, [e.target.name]: e.target.value })
   };

   function handleSubmit(e) {
      e.preventDefault()

      const newMeal = {
         date: formData.date,
         name: formData.name, 
         description: formData.description,
         user_id: user.id,
      }

      // /POST /meals
      fetch('http://localhost:4000/meals', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newMeal)
      })
      .then(res => res.json())
      .then(meal => {
         const action = addMeal(meal)
         console.log(action)
         dispatch(action)
      })
      
      setFormData({
         date: "",
         name: "",
         description: "",
      })
   }

   return (
      <>
         <h4>What did you eat today?</h4>
         <form onSubmit={handleSubmit}>
            <label>Date: </label>
            <input
               type="date"
               name="date"
               value={formData.date}
               onInput={handleInput} 
            />
            <label>Meal: </label>
            <input
               type="input"
               name="name"
               value={formData.name}
               onChange={handleInput} 
            />
            <label>Description: </label>
            <input
               type="input"
               name="description"
               value={formData.description}
               onChange={handleInput} 
            />
            <input type="submit" />
         </form>
      </>
   )
};

export default MealForm;