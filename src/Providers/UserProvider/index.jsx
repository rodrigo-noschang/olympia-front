import { useContext, createContext, useState } from "react";
import api from "../../services/api";

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

    const removeMeal = (mealNumber) => {
        mealNumber = Number(mealNumber);
        const meals = Object.keys(mealsSeparation);

        for (let i = mealNumber; i < meals.length; i++ ) {
            mealsSeparation[i] = mealsSeparation[i + 1];
        }

        delete mealsSeparation[meals.length];
        setMealsSeparation({...mealsSeparation});


        api.delete(`/food/${mealNumber}`)
        .then(res => {
            for (let i = mealNumber; i < meals.length; i++) {
                const newMeal = {
                    meal: i
                };

                api.patch(`/food/${i + 1}`, newMeal)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            }
        })
        .catch(err => {
            console.log(err);
        })
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
            addNewMeal, 
            removeMeal }}>
            { children }
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);