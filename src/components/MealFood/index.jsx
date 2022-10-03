import MealFoodContainer from "./style"

const MealFood = () => {

    return (
        <MealFoodContainer>
            <div className = 'meal-list-data food-name' title = 'Arroz Branco Integral Cru'>
                Arroz Branco Integral Cru
            </div>
            <div className = 'meal-list-data food-weight'>
                100
            </div>
            <div className = 'meal-list-data food-carb'>
                28
            </div>
            <div className = 'meal-list-data food-protein'>
                2
            </div>
            <div className = 'meal-list-data food-fat'>
                0.25
            </div>
        </MealFoodContainer>
    )
}

export default MealFood