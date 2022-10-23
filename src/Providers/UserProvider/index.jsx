import { useContext, createContext, useState } from "react";
import api from "../../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [mealsSeparation, setMealsSeparation] = useState({})
    const [carbsTotalState, setCarbsTotalState] = useState(0);
    const [proteinTotalState, setProteinTotalState] = useState(0);
    const [fatTotalState, setFatTotalState] = useState(0);
    const [removeMealLoad, setRemoveMealLoad] = useState(false);
    
    let totalCalories = carbsTotalState * 4 + proteinTotalState * 4 + fatTotalState * 9;
    
    const bmr = user.gender === 'M' ? 
        66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.75 * user.age)
    : user.gender === 'F' ?
        655.1 + (9.563 * user.weight) + (1.850 * user.height) - (4.676 * user.age)
    : 0;

    const calculateMacros = () => {
        if (!user.id) return;
        let carbsTotal = 0; 
        let proteinTotal = 0;
        let fatTotal = 0;

        for (let meal in mealsSeparation) {
            const currentMeal = mealsSeparation[meal];

            for (let i = 0; i < currentMeal.length; i++) {
                carbsTotal += currentMeal[i].carbs;
                proteinTotal += currentMeal[i].protein;
                fatTotal += currentMeal[i].fat;
            }         
        }

        setCarbsTotalState(carbsTotal);
        setProteinTotalState(proteinTotal);
        setFatTotalState(fatTotal);
    }

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
        setRemoveMealLoad(true);
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
                .then(res => {
                    calculateMacros()
                })
                .catch(err => {
                    console.log(err)
                })
            }
            setRemoveMealLoad(false);
        })
        .catch(err => {
            console.log(err);
            setRemoveMealLoad(false);
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
            removeMeal, 
            calculateMacros,
            carbsTotalState,
            proteinTotalState,
            fatTotalState,
            totalCalories, 
            bmr, 
            removeMealLoad }}>
            { children }
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);