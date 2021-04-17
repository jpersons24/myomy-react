import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function FoodShow({ meal }) {

   const foods = useSelector((state) => state.food.foods);

   // filter through foods
   const filteredFoods = foods.filter(food =>  food.meal_id === meal.id );

   // map through filtered foods to make table components
   const foodComponents = filteredFoods.map((food) => {
      return(
         <>
            <tbody key={food.id}>
               <tr>
                  <td>{food.name}</td>
                  <td>{food.food_group}</td>
                  <td>{food.nutrient}</td>
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
                  <th>Name</th>
                  <th>Food Group</th>
                  <th>Nutrient Type</th>
               </tr>
            </thead>
            {foodComponents}
         </Table>
      </div>
   )
};

export default FoodShow;