import { useContext, createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [mealsSeparation, setMealsSeparation] = useState({})

    const separateMeals = (userFoods) => {
        const separation = {};
        console.log('UserFoods -> ', userFoods)
        
        userFoods.forEach(food => {
            if (separation[food.meal]) {
                separation[food.meal].push(food);
            } else {
                separation[food.meal] = [food];
            }
        })
        
        setMealsSeparation(separation);
    }

    const updateFood = (meal, updatedFoodData, mealNumber) => {
        const foodIndex = meal.findIndex(food => {
            return food.id === updatedFoodData.id
        });

        meal.splice(foodIndex, 1, updatedFoodData);

        mealsSeparation[mealNumber] = meal;
        setMealsSeparation({...mealsSeparation});
    }

    const removeFood = ( meal, removedFoodId, mealNumber ) => {
        const updatedMeal = meal.filter(food => {
            return food.id !== removedFoodId
        })

        mealsSeparation[mealNumber] = updatedMeal;
        setMealsSeparation({...mealsSeparation});
    }

    const addNewMeal = () => {
        const mealAmount = Object.keys(mealsSeparation).length;
        
        mealsSeparation[mealAmount + 1] = [];
        setMealsSeparation({...mealsSeparation});
    }

    return (
        <UserContext.Provider value = {{
            user, 
            setUser, 
            mealsSeparation, 
            setMealsSeparation, 
            separateMeals, 
            removeFood, 
            updateFood,
            addNewMeal }}>
            { children }
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);