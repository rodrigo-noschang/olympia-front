import { MealFoodContainer, MealFoodOptions} from "./style";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactLoading from 'react-loading';
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useUserContext } from "../../Providers/UserProvider";

const MealFood = ({ empty, food, meal, mealNumber }) => {
    const [loadingNewFood, setLoadingNewFood] = useState(false);
    const [positionDeltaAnimation, setPositionDeltaAnimation] = useState(0);
    // const [initialPosition, setInicialPosition] = useState(0);
    let initialPosition = 0;
    let positionDelta = 0;
    const { userId } = useParams();
    const token = localStorage.getItem('diet-buddy:token') || '';
    const { setMealsSeparation, mealsSeparation } = useUserContext();
    
    const newFoodSchema = yup.object().shape({
        name: yup.string().required('Campo Obrigatório'),
        food_weight: yup.number().required('Campo Obrigatório'),
        carbs: yup.number().required('Campo Obrigatório'),
        protein: yup.number().required('Campo Obrigatório'),
        fat: yup.number().required('Campo Obrigatório')
    });

    const { register, formState: {errors}, handleSubmit, reset } = useForm({
        resolver: yupResolver(newFoodSchema)
    });

    const createNewFood = data => {
        setLoadingNewFood(true);
        const newFood = {...data, meal: Number(mealNumber)};
        reset();

        api.post(`/food/${userId}`, newFood, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            const dbFood = res.data;
            meal.push(dbFood);
            setMealsSeparation({...mealsSeparation});
            setLoadingNewFood(false);
        })
        .catch(err => {
            console.log(err);
            setLoadingNewFood(false);
        })
    }

    const registerStart = e => {
        // setInicialPosition(e.touches[0].clientX);
        setPositionDeltaAnimation(0);
        initialPosition = e.touches[0].clientX
    }

    // const updateTouchPosition = e => {
    //     const finalPosition = e.touches[0].clientX;
    //     setPositionDelta(finalPosition - initialPosition)
    // }



    const resetPositionDelta = e => {
        const finalPosition = e.changedTouches[0].clientX;
        const positionDelta = finalPosition - initialPosition;

        if (positionDelta <= -30) {
            setPositionDeltaAnimation(-30);
        }
    }


    return (
        <>
            { empty ?
                <MealFoodContainer onSubmit = {handleSubmit(createNewFood)} 
                    errors = {errors}
                    positionDelta = {positionDelta} >
                    { loadingNewFood &&
                        <div className = 'create-food-load-container'>
                            <ReactLoading className = 'load' type = 'bars' color = '#E54E47' height = {35} width = {35}/>
                            Inserindo alimento...
                        </div>
                    }

                    <form className = 'new-meal-form-container'>
                        <div className = 'meal-list-data food-name'>
                            <input placeholder = 'Novo alimento'
                                className = 'meal-list-input food-name-input'
                                {...register('name')}/>
                        </div>

                        <div className = 'meal-list-data food-weight'>
                            <input placeholder = 'Pe' 
                                className = 'meal-list-input food-weight-input'
                                type = 'number'
                                {...register('food_weight')}/>
                        </div>

                        <div className = 'meal-list-data food-carb'>
                            <input placeholder = 'C' 
                                className = 'meal-list-input food-carbs-input'
                                type = 'number'
                                {...register('carbs')}/>
                        </div>

                        <div className = 'meal-list-data food-protein'>
                            <input placeholder = 'P' 
                                className = 'meal-list-input food-protein-input'
                                type = 'number'
                                {...register('protein')}/>
                        </div>

                        <div className = 'meal-list-data food-fat'>
                            <input placeholder = 'G' 
                                className = 'meal-list-input food-fat-input'
                                type = 'number'
                                {...register('fat')}/>
                        </div>

                        <button className = 'new-food-submit'></button>
                    </form>
                </MealFoodContainer>
            :
                <> 
                    <MealFoodContainer draggable = {true} errors = {errors} 
                        onTouchStart = {registerStart}
                        // onTouchMove = {updateTouchPosition} 
                        onTouchEnd = {resetPositionDelta}
                        positionDelta = {positionDeltaAnimation} >
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
                        <MealFoodOptions> 
                            Oiee 
                        </MealFoodOptions>
                    </MealFoodContainer>
                </>
            }   
        </>
    )
}

export default MealFood