import MealFood from "../MealFood";
import MealTableContainer from "./style";
import { useUserContext } from "../../Providers/UserProvider";

const MealTable = ({ meal, mealNumber }) => {
    const newFoods = [];
    const { removeMeal } = useUserContext();

    return (
        <MealTableContainer>
            <h2 className = 'meal-table-title' onClick = {() => removeMeal(mealNumber)}> 
                Refeição {mealNumber} 
            </h2>

            <header className = 'meal-table-header'>
                <div className = 'meal-table-header-data'> Alimento </div>
                <div className = 'meal-table-header-data'> 
                    <span className = 'meal-table-header-unit unit-weight'>
                        (g) 
                    </span>
                </div>
                <div className = 'meal-table-header-data'> 
                    <span className = 'meal-table-header-unit unit-carbs'> 
                        (g) 
                    </span>
                </div>
                <div className = 'meal-table-header-data'> 
                    <span className = 'meal-table-header-unit unit-protein'> 
                        (g) 
                    </span>
                </div>
                <div className = 'meal-table-header-data'> 
                    <span className = 'meal-table-header-unit unit-fat'> 
                        (g) 
                    </span>
                </div>
            </header>

            <ul className = 'meal-list-container'>
                { meal.map((food, index) => {
                    return <MealFood key = {`meal-${mealNumber}-food-${index}`}
                        food = {food}
                        meal = {meal} 
                        mealNumber = {mealNumber}/>
                    })
                }
                <MealFood empty newFoods = {newFoods} 
                    meal = {meal} 
                    mealNumber = {mealNumber} />
            </ul>
            
        </MealTableContainer>
    )
}

export default MealTable;