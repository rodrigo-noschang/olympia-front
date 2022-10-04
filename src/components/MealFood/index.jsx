import MealFoodContainer from "./style";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactLoading from 'react-loading';
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";


const MealFood = ({ empty, food, meal, mealNumber, setMealsSeparation, mealsSeparation }) => {
    const [loadingNewFood, setLoadingNewFood] = useState(false);
    const { userId } = useParams();
    const token = localStorage.getItem('diet-buddy:token') || '';

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

    return (
        <>
            { empty ?
                <MealFoodContainer onSubmit = {handleSubmit(createNewFood)} errors = {errors}>
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
                <MealFoodContainer errors = {errors}>
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