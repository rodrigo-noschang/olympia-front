import styled from "styled-components";

const MealTableContainer = styled.div`
    width: 100%;      
    background-color: #fff;
    box-shadow: 0 0 5px 1px var(--light-grey);
    padding-bottom: 10px;
    margin: 25px 0;

    .meal-table-title {
        background-color: var(--background-black);
        color: var(--text-red);
        text-align: center;
        padding: 10px;
        font-size: 25px;
        position: relative;
    }

    .meal-table-header-close-desktop {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        cursor: pointer;
        display: none;
    }

    .meal-table-title:hover .meal-table-header-close-desktop {
        display: inline;
    }

    .meal-table-header-close-mobile {
        position: absolute;
        top: -8px;
        right: -8px;
        font-size: 20px;
    }

    .meal-table-header-close-mobile svg {
        border: 1px solid var(--background-black);
        background-color: var(--background-black);
        border-radius: 50%;
        color: var(--text-red);   
    }

    .meal-table-header {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #000;
        padding: 10px 0;
        margin: 0 5px 10px;
    }

    .meal-table-header-data:first-of-type {
        flex-basis: 36%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .meal-table-header-data:not(:first-of-type) {
        flex-basis: 12%;
        text-align: right;
        margin: 0 5px;
    }

    .meal-list-container {
        overflow: hidden;
    }

    .meal-table-header-unit {
        font-family: var(--text-font);
        font-size: 12px;
        color: var(--light-grey);
    }

    .unit-weight::before, .unit-carbs::before, .unit-protein::before, 
    .unit-fat::before {
        font-size: 17px;
        color: var(--background-black);
    }

    .unit-weight::before {
        content: 'Pe';
    }

    .unit-carbs::before {
        content: 'C';
    }

    .unit-protein::before {
        content: 'P';
    }

    .unit-fat::before {
        content: 'G';
    }

    @media only screen and (min-width: 650px) {
        .unit-weight::before {
            content: 'Peso';
        }

        .unit-carbs::before {
            content: 'Carboidrato';
        }

        .unit-protein::before {
            content: 'Proteina';
        }

        .unit-fat::before {
            content: 'Gordura';
        }   
    }

    @media only screen and (min-width: 1100px) {
        .meal-table-header-close-mobile svg {
            display: none;
        }
    }
`;

export default MealTableContainer