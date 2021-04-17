import { useState } from 'react';
// import { useDispatch } from 'react-redux';

function MealForm({ user }) {

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

      // /POST /meals
      // addMeal using dispatch

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
            <label>Food Group: </label>
            <input
               type="input"
               name="name"
               value={formData.name}
               onChange={handleInput} 
            />
            <label>Nutirient Type: </label>
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