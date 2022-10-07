import styled, { keyframes } from "styled-components";

const invalidInputShake = keyframes`
    0% {
        transform: translateX(0);
    }

    15% {
        transform: translateX(4px);
    }

    30% {
        transform: translateX(-4px);
    }

    45% {
        transform: translateX(4px);
    }

    60% {
        transform: translateX(-4px);
    }

    75% {
        transform: translateX(0px);
    }
`;

const MealFoodContainer = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    position: relative;
    transform: ${props => props.positionDelta < 0 ? 'translateX(-50px)' : 'translateX(0)'};
    transition: transform .3s ease-in;

    .create-food-load-container {
        position: absolute;
        background-color: var(--light-grey);
        width: 100%;
        height: 60px;
        top: 0;
        left: 0;
        text-align: center;
    }

    .load {
        text-align: center;
        margin: 0 auto;
    }

    .new-meal-form-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    &:nth-child(2n - 1) {
        background-color: #f3f3f3;
    }

    .meal-list-data:first-of-type {
        flex-basis: 36%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .meal-list-data:not(:first-child) {
        flex-basis: 12%;
        text-align: center;
        margin: 0 5px;
    }

    .meal-list-input {
        width: 30px;
        padding: 5px;
        box-shadow: inset 0 0 1px 1px var(--light-grey);
        border: 1px solid #f3f3f3;
        outline: none;
    }

    .food-name-input {
        border-color: ${props => props.errors.name ? 'red' : '#F3F3F3'};
        animation-name: ${props => props.errors.name ? invalidInputShake : ''};
        animation-duration: .5s;
    }

    .food-weight-input {
        border-color: ${props => props.errors.food_weight ? 'red' : '#F3F3F3'};
        animation-name: ${props => props.errors.food_weight ? invalidInputShake : ''};
        animation-duration: .5s;
    }

    .food-carbs-input {
        border-color: ${props => props.errors.carbs ? 'red' : '#F3F3F3'};
        animation-name: ${props => props.errors.carbs ? invalidInputShake : ''};
        animation-duration: .5s;
    }

    .food-protein-input {
        border-color: ${props => props.errors.protein ? 'red' : '#F3F3F3'};
        animation-name: ${props => props.errors.protein ? invalidInputShake : ''};
        animation-duration: .5s;
    }

    .food-fat-input {
        border-color: ${props => props.errors.fat ? 'red' : '#F3F3F3'};
        animation-name: ${props => props.errors.fat ? invalidInputShake : ''};
        animation-duration: .5s;
    }

    .new-form-error {
        font-size: 12px;
        color: red;
        font-style: italic;
        text-align: center;
    }

    /* Remove arrows in number type input on Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Remove arrows in number type input on Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    .food-name-input {
        width: 100%;
    }

    .new-food-submit {
        display: none;
    }

    .menu-icon-modal-container {
        position: absolute;
        width: 100%;  
    }

    .menu-icon-clickable-area {
        width: 20px;
        text-align: center;
        margin-left: auto;
        margin-right: 2px;
    }

    @media only screen and (min-width: 550px) {
        .meal-list-input {
            width: 50px;
        }

        .food-name-input {
            width: 100%;
        }
    }

    @media only screen and (min-width: 650px) {
        .meal-list-data:not(:first-child) {
            margin: 0 15px;
            text-align: right;
        }
    }
`;

const MealFoodOptions = styled.div`
    position: absolute;
    left: 100%;
`;

export { MealFoodContainer, MealFoodOptions };