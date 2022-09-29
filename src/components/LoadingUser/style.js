import styled, {keyframes} from "styled-components";

const zoomInOut = keyframes`
    0% {
        transform: scale(1);
    }

    20% {
        transform: scale(1.08);
    }

    60% {
        transform: scale(.92);
    }

    75% {
        transform: scale(1);
    }
`;


const LoadingUserContainer = styled.div`
    margin: 30px auto 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    
    .dashboard-loading-message {
        animation: ${zoomInOut} 3s infinite;
    }
`;

export default LoadingUserContainer;