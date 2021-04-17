import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFood } from '../redux/foodSlice';
import FoodShow from './FoodShow';

function FoodLog({ meal }) {

   const dispatch = useDispatch();
   const [show, setShow] = useState(false);
   const [formData, setFormData] = useState({
      name: "",
      food_group: "",
      nutrient: "",
   });

   function handleClick(e) {
      setShow((show) => !show)
   };

   function handleInput(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
   };

   function handleSubmit(e) {
      e.preventDefault()

      // create new food object
      const newFood = {
         name: formData.name,
         food_group: formData.food_group,
         nutrient: formData.nutrient,
         meal_id: meal.id,
      }

      // /POST /foods
      fetch('http://localhost:4000/foods', {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newFood),
      })
      .then(res => res.json())
      .then(data => {
         const action = addFood(data)
         dispatch(action)
      })

      // reset form input fields
      setFormData({
         name: "",
         food_group: "",
         nutrient: "",
      })
   };

   return (
      <div>
         {show ? 
            <>
               <button onClick={handleClick}>Hide Foods</button>
               <form onSubmit={handleSubmit}>
                  <label>Name: </label>
                  <input
                     type="input"
                     name="name"
                     value={formData.name}
                     onChange={handleInput}
                  />
                  <label>Food group: </label>
                  <input
                     type="input"
                     name="food_group"
                     value={formData.food_group}
                     onChange={handleInput} 
                  />
                  <label>Nutrient Type: </label>
                  <input
                     type="input"
                     name="nutrient"
                     value={formData.nutrient}
                     onChange={handleInput} 
                  />
                  <input type="submit" value="Add Food" />
               </form>
               <FoodShow meal={meal} />
            </>
            :
            <button onClick={handleClick}>Show Foods</button>
         }
      </div>
   )
};

export default FoodLog;