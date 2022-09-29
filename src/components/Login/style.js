import styled, { keyframes } from 'styled-components';

const disappearToRight = keyframes`
    from {
        opacity: 1;
        transform: translateX(-50%);
    }

    to {
        opacity: 0;
        transform: translateX(300px);
    }
`;

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50%);
    }

    to {
        opacity: 1;
        transform: translateX(-50%);
    }
`;

const LoginContainer = styled.form`
    width: 90vw;
    max-width: 510px;
    padding: 20px 10px;
    background-color: var(--background-black);
    animation: ${props => props.animation === 'hide-login' ? disappearToRight : props.animation === 'hide-register' ? appearFromRight : ''};
    animation-duration: 1s;
    height: fit-content;
    
    .login-header {
        color: #fff;
        font-size: 22px;
        margin-bottom: 20px;
    }

    .login-inputs {
        padding-top: 20px;
        border-top: 1px solid #fff;
        position: relative;
    }

    .login-inputs::before {
        content: 'Login';
        display: block;
        padding: 5px 10px;
        background-color: var(--background-black);
        position: absolute;
        top: -15px;
        left: 20px;
        color: #fff;
    }

    .login-input-container {
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
    }

    .login-label {
        color: var(--text-red);
        font-size: 20px;
    }

    .login-input {
        padding: 2px 5px;
        flex-grow: .6;
    }

    .login-input-error {
        color: var(--text-red);
        text-align: center;
        margin-top: -13px;
        font-style: italic;
    }

    .login-submit {
        display: block;
        margin: 35px auto 10px;
        padding: 5px 15px;
        color: var(--text-red);
        background-color: var(--background-black);
        border: none;
        box-shadow: 0 0 3px 1px #FFF;
        font-size: 18px;
        cursor: pointer;
    }

    .login-submit:hover {
        background-color: #f3f3f3;
        color: var(--background-black);
        transition: .3s;
    }

    .login-submit:active {
        box-shadow: 0 0 8px 1px #fff;
        background-color: var(--background-black);
        color: #f3f3f3;
    }

    .login-to-register {
        color: #f3f3f3;
        text-align: center;
        margin-top: 20px;
    }

    .login-register-link {
        font-family: var(--text-font);
        font-weight: bold;
        cursor: pointer;
        border-bottom: 1px solid transparent;
    }

    .login-register-link:hover {
        border-bottom-color: #FFF;
        color: #FFF;
        transition: .3s;
    }

    .login-register-link:active {
        color: var(--background-black);
    }
`;

export default LoginContainer;