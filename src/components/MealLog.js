import Table from 'react-bootstrap/Table';
import FoodLog from './FoodLog';
import { useSelector } from 'react-redux';

function MealLog({ user }) {

   const meals = useSelector((state) => state.meal.meals);

   // filter through meals for current user meals
   const filteredMeals = meals.filter((meal) => {
      return meal.user_id === user.id
   });

   // sort filtered meals by date
   let sortedMeals = filteredMeals.sort(function(a, b) {
      return new Date(a.date) - new Date(b.date)
   });

   // map through filtered meals to create display components
   const mealComponents = sortedMeals.map((meal) => {
      return (
         <>
            <tbody key={meal.id}>
               <tr>
                  <td>{meal.date}</td>
                  <td>{meal.name}</td>
                  <td>{meal.description}</td>
               </tr>
            </tbody>
            <FoodLog meal={meal} />
         </>
      )
   });

   return(
      <>
         <h2>{user.username}'s Meals</h2>
         <p>Add filter or search feature to display meals from selected date</p>
         <Table striped bordered size="lg">
            <thead>
               <tr>
                  <th>Date</th>
                  <th>Breakfast/Lunch/Dinner/Snack</th>
                  <th>Description</th>
               </tr>
            </thead>
            {mealComponents}
         </Table>
      </>
   )
};

export default MealLog;