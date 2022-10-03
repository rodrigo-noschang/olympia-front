import MealFood from "../MealFood";
import MealTableContainer from "./style";

const MealTable = () => {

    return (
        <MealTableContainer>
            <h2 className = 'meal-table-title'> Refeição 1 </h2>

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
                <MealFood />
                <MealFood />
                <MealFood />
            </ul>
            
        </MealTableContainer>
    )
}

export default MealTable;