import { useContext, createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [mealsSeparation, setMealsSeparation] = useState({})

    const separateMeals = (userFoods) => {
        const separation = {};
        
        userFoods.forEach(food => {
            if (separation[food.meal]) {
                separation[food.meal].push(food);
            } else {
                separation[food.meal] = [food];
            }
        })
        
        setMealsSeparation(separation);
    }

    const removeFood = ( removedFoodId ) => {
        const updatedFoods = user.foods.filter(food => {
            return food.id !== removedFoodId
        })

        separateMeals(updatedFoods);
    }

    return (
        <UserContext.Provider value = {{
            user, 
            setUser, 
            mealsSeparation, 
            setMealsSeparation, 
            separateMeals, 
            removeFood }}>
            { children }
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);