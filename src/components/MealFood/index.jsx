import MealFoodContainer from "./style"

const MealFood = ({ empty, food }) => {
    // let newFoodName = null;
    // let newFoodWeight = null;
    // let newFoodCarbs = null;
    // let newFoodProt = null;
    // let newFoodFat = null;


    return (
        <>
            { empty ?
                <MealFoodContainer>
                    <div className = 'meal-list-data food-name'>
                        <input placeholder = 'Novo alimento' 
                            className = 'meal-list-input food-name-input'/>
                    </div>
                    <div className = 'meal-list-data food-weight'>
                        <input placeholder = 'Pe' 
                            className = 'meal-list-input'
                            type = 'number'/>
                    </div>
                    <div className = 'meal-list-data food-carb'>
                        <input placeholder = 'C' 
                            className = 'meal-list-input'
                            type = 'number'/>
                    </div>
                    <div className = 'meal-list-data food-protein'>
                        <input placeholder = 'P' 
                            className = 'meal-list-input'
                            type = 'number'/>
                    </div>
                    <div className = 'meal-list-data food-fat'>
                        <input placeholder = 'G' 
                            className = 'meal-list-input'
                            type = 'number'/>
                    </div>
                </MealFoodContainer>
            :
                <MealFoodContainer>
                    <div className = 'meal-list-data food-name' title = {food.name}>
                        {food.name}
                    </div>
                    <div className = 'meal-list-data food-weight'>
                        {food.food_weight}
                    </div>
                    <div className = 'meal-list-data food-carb'>
                        {food.carbs}
                    </div>
                    <div className = 'meal-list-data food-protein'>
                        {food.protein}
                    </div>
                    <div className = 'meal-list-data food-fat'>
                        {food.fat}
                    </div>
                </MealFoodContainer>
            }   
        </>
    )
}

export default MealFood