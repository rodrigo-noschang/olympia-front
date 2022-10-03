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

    /* @media only screen and (min-width: 700px) {
        .meal-table-header-data:first-of-type {
            max-width: 100%;
            flex-basis: 26%;
        }
    } */
`;

export default MealTableContainer