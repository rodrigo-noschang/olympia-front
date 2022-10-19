import MealFood from "../MealFood";
import MealTableContainer from "./style";
import { useUserContext } from "../../Providers/UserProvider";
import { HiTrash } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';

const MealTable = ({ meal, mealNumber }) => {
    const newFoods = [];
    const { removeMeal } = useUserContext();

    return (
        <MealTableContainer>
            <h2 className = 'meal-table-title'> 
                Refeição {mealNumber} 
                <span className = 'meal-table-header-close-desktop' onClick = {() => removeMeal(mealNumber)}>
                    <HiTrash />     
                </span>

                <span className = 'meal-table-header-close-mobile' onClick = {() => removeMeal(mealNumber)}>
                    <AiFillCloseCircle />     
                </span>
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