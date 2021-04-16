import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function MealLog({ user }) {

   const meals = useSelector((state) => state.meal.meals)
   console.log(meals)

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
            
         </Table>
      </>
   )
};

export default MealLog;