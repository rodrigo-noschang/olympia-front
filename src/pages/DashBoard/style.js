import styled from "styled-components";

const DashboardContainer = styled.div`
    background-color: #f3f3f3;
    min-height: 100vh;

    .dashboard-user-not-found-container {
        text-align: center;
        margin-top: 30px;
        font-size: 22px;
        font-style: italic;
    }

    .dashboard-user-info-container {
        width: 90vw;
        max-width: 1200px;
        margin: 35px auto 0;
    }
`;

export default DashboardContainer;