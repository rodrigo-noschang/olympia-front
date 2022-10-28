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
    position: relative;
    overflow-x: scroll;
    padding: ${props => props.emptyState ? '10px 5px 40px' : '10px 5px'};

    &::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    & {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }


    .create-food-load-container {
        position: absolute;
        background-color: var(--light-grey);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }

    .load {
        margin-left: 10px;
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
        position: absolute;
        left: 50%;
        bottom: 8px;
        transform: translateX(-50%);
        z-index: 1;
        font-size: 15px;
        letter-spacing: 1.4px;
        padding: 3px 7px;
        background-color: var(--background-black);
        color: var(--text-red);
        border: none;
        border-radius: 3px;
    }

    .new-food-submit:hover {
        cursor: pointer;
        background-color: #f3f3f3;
        color: var(--background-black);
        box-shadow: 0 0 3px 1px var(--background-black);
        transition: .3s;
    }

    .new-food-submit:active {
        box-shadow: 0 0 8px 1px #fff;
        background-color: var(--background-black);
        color: #f3f3f3;
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

        .new-food-submit {
            padding: 3px 15px;
        }
    }

    @media only screen and (min-width: 650px) {
        .meal-list-data:not(:first-child) {
            margin: 0 15px;
            text-align: right;
        }
    }
`;

const MealFoodOptionsMobile = styled.div`
    position: absolute;
    left: 100%;
    display: flex;
    color: var(--text-red);
    align-items: center;

    .meal-food-options {
        margin: 0 5px;
    }

    .meal-food-options-edit {
        color: var(--background-black);
    }

    @media only screen and (min-width: 1100px) {
        display: none;
    }
`;

const MealFoodOptionsDesktop = styled.div`
    display: none;

    @media only screen and (min-width: 1100px) {
        display: flex;
        position: absolute;
        right: 10px;
        top: 5px;
        color: var(--text-red);
        align-items: center;
        background-color: #ddd;
        padding: 5px;
        
        .meal-food-options {
            margin: 0 5px;
            cursor: pointer;
        }
        
        .meal-food-options-edit {
            color: var(--background-black);
        }
    }
`;

export { MealFoodContainer, MealFoodOptionsMobile, MealFoodOptionsDesktop };