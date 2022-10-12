import styled from "styled-components";

const DashboardContainer = styled.div`
    background-color: #f3f3f3;
    min-height: 100vh;
    padding-bottom: 30px;

    .dashboard-user-not-found-container {
        text-align: center;
        margin-top: 30px;
        font-size: 22px;
        font-style: italic;
    }

    .dashboard-user-info-container {
        width: 90vw;
        max-width: 1000px;
        margin: 35px auto 0;
    }

    .dashboard-table-container {
        margin: 30px auto;
    }

    .dashboard-add-meal {
        padding: 5px 15px;
        border: none;
        border-radius: 5px;
        font-size: 18px;
        background-color: var(--background-black);
        color: var(--text-red);
        box-shadow: 0 0 3px 1px #FFF;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .dashboard-add-meal:hover {
        background-color: #f3f3f3;
        color: var(--background-black);
        box-shadow: 0 0 3px 1px var(--background-black);
        transition: .3s;
    }

    .dashboard-add-meal:active {
        box-shadow: 0 0 8px 1px #fff;
        background-color: var(--background-black);
        color: #f3f3f3;
    }

    .dashboard-add-meal-load {
        margin-right: 10px;
    }
`;

export default DashboardContainer;