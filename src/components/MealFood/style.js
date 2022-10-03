import styled from "styled-components";

const MealFoodContainer = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;

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
        text-align: right;
        margin: 0 5px;
    }

    .meal-list-input {
        width: 30px;
        padding: 5px;
        box-shadow: inset 0 0 1px 1px var(--light-grey);
        border: none;
        outline: none;;
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
        }
    }
`;

export default MealFoodContainer