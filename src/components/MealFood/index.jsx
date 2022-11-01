import { MealFoodContainer, MealFoodOptionsMobile, MealFoodOptionsDesktop} from "./style";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactLoading from 'react-loading';
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useUserContext } from "../../Providers/UserProvider";
import { RiEditFill } from 'react-icons/ri';
import { HiTrash } from 'react-icons/hi';

const MealFood = ({ empty, food, meal, mealNumber }) => {
    // This state will change if user clicks to update food.. The food data
    // will turn into an empty input
    const [emptyState, setEmptyState] = useState(empty);
    const [loadingNewFood, setLoadingNewFood] = useState(false);
    const [foodOptionsDesktop, setFoodOptionsDesktop] = useState(false);
    let positionDelta = 0;
    const { userId } = useParams();
    const token = localStorage.getItem('diet-buddy:token') || '';
    const { setMealsSeparation, mealsSeparation, removeFood, updateFood, calculateMacros } = useUserContext();
    
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

    const createOrUpdateFood = data => {
        // If there already is a "food" in the props, then user wants to
        // update the existing food. If not, he wants to create one 
        if (!food) { 
            createNewFood(data);
        } else {
            editFood(data);
        }
    }

    const createNewFood = data => {
        setLoadingNewFood('Criando alimento...');
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
            calculateMacros();
        })
        .catch(err => {
            console.log(err);
            setLoadingNewFood(false);
        })
    }

    const editFood = data => {
        setLoadingNewFood('Atualizando...');
        
        api.patch(`/food/${food.id}`, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            updateFood(meal, res.data, mealNumber)
            setLoadingNewFood(false);
            setEmptyState(false);
            calculateMacros();
        })
        .catch(err => {
            console.log(err);
            setLoadingNewFood(true);
            setEmptyState(false);
        })
    }

    const deleteFood = () => {
        setLoadingNewFood('Excluindo Alimento...');

        api.delete(`/food/${food.id}`, {
            headers: {
                Authorization: `Bearar ${token}`
            }
        })
        .then(res => {
            removeFood(meal, res.data.id, mealNumber);
            setLoadingNewFood(false);
            calculateMacros();
        }) 
        .catch(err => {
            console.log(err);
            setLoadingNewFood(false);
        })
    }

    const openEditForm = () => {
        setEmptyState(true);
    }

    const showOptionsDesktop = () => {
        setFoodOptionsDesktop(true);
    }

    const hideOptionsDesktop = () => {
        setFoodOptionsDesktop(false);
    }

    return (
        <>
            { emptyState ?
                <MealFoodContainer onSubmit = {handleSubmit(createOrUpdateFood)} 
                    errors = {errors}
                    positionDelta = {positionDelta} 
                    emptyState = {emptyState} >
                    { loadingNewFood &&
                        <div className = 'create-food-load-container'>
                            <span> { loadingNewFood } </span>
                            <ReactLoading className = 'load' type = 'bars' color = '#E54E47' height = {35} width = {35}/>
                        </div>
                    }

                    <form className = 'new-meal-form-container'>
                        <div className = 'meal-list-data food-name'>
                            <input placeholder = 'Novo alimento'
                                className = 'meal-list-input food-name-input'
                                defaultValue = {food?.name}
                                {...register('name')} />
                        </div>

                        <div className = 'meal-list-data food-weight'>
                            <input placeholder = 'Pe' 
                                className = 'meal-list-input food-weight-input'
                                defaultValue = {food?.food_weight}
                                {...register('food_weight')}/>
                        </div>

                        <div className = 'meal-list-data food-carb'>
                            <input placeholder = 'C' 
                                className = 'meal-list-input food-carbs-input'
                                defaultValue = {food?.carbs}
                                {...register('carbs')}/>
                        </div>

                        <div className = 'meal-list-data food-protein'>
                            <input placeholder = 'P' 
                                className = 'meal-list-input food-protein-input'
                                defaultValue = {food?.protein}
                                {...register('protein')}/>
                        </div>

                        <div className = 'meal-list-data food-fat'>
                            <input placeholder = 'G' 
                                className = 'meal-list-input food-fat-input'
                                defaultValue = {food?.fat}
                                {...register('fat')}/>
                        </div>

                        <button className = 'new-food-submit'> Adicionar Alimento </button>
                    </form>
                </MealFoodContainer>
            :
                <> 
                    <MealFoodContainer errors = {errors} 
                        onMouseEnter = {showOptionsDesktop} 
                        onMouseLeave = {hideOptionsDesktop} 
                        emptyState = {emptyState} >

                        { loadingNewFood &&
                            <div className = 'create-food-load-container'>
                                <span> { loadingNewFood } </span>
                                <ReactLoading className = 'load' type = 'bars' color = '#E54E47' height = {35} width = {35}/>
                            </div>
                        }

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

                        <MealFoodOptionsMobile> 
                            <span className = 'meal-food-options meal-food-options-edit'
                                onClick = {openEditForm} >
                                <RiEditFill />
                            </span>

                            <span className = 'meal-food-options meal-food-options-delete'
                                onClick = {deleteFood}>
                                <HiTrash />
                            </span>
                        </MealFoodOptionsMobile>

                        
                        { foodOptionsDesktop &&
                        <MealFoodOptionsDesktop>
                            <span className = 'meal-food-options meal-food-options-edit'
                                onClick = {openEditForm} >
                                <RiEditFill />
                            </span>

                            <span className = 'meal-food-options meal-food-options-delete'
                                onClick = {deleteFood}>
                                <HiTrash />
                            </span>
                        </MealFoodOptionsDesktop>
                        }
                    </MealFoodContainer>
                </>
            }   
        </>
    )
}

export default MealFood