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

    @media only screen and (min-width: 650px) {
        .meal-list-data:not(:first-child) {
            margin: 0 15px;
        }
    }
`;

export default MealFoodContainer