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

    return (
        <UserContext.Provider value = {{user, setUser, mealsSeparation, setMealsSeparation, separateMeals}}>
            { children }
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);