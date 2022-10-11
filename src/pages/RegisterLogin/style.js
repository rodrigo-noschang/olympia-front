import styled ,{keyframes} from "styled-components"

const messageAppear = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const RegisterLoginContainer = styled.div`
    min-height: 100vh;
    background-color: #f3f3f3;

    .register-fail-message, .register-success-message, .login-fail-message {
        padding: 8px 0;
        text-align: center;
        position: relative;
        animation: ${messageAppear} .3s;
    }

    .register-fail-message, .login-fail-message {
        color: red;
        background-color: var(--fail-red);
    }

    .register-success-message {
        color: green;
        background-color: var(--success-green);
    }

    .close-register-fail-message, .close-register-success-message, .close-login-fail-message {
        font-family: var(--text-font);
        font-weight: bold;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 15px;
    }

    .register-login-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

    }

    @media only screen and (min-width: 570px) {
        .register-login-container {
            margin-top: 80px;
        }
    }

    @media only screen and (min-width: 1530px) {
        .register-login-container {
            flex-direction: row;
            align-items: flex-start;
        }
    }

`;

export default RegisterLoginContainer;