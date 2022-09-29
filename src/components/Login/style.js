import styled from 'styled-components';

const LoginContainer = styled.form`
    width: 90vw;
    max-width: 510px;
    padding: 20px 10px;
    background-color: var(--background-black);
    margin: 20px auto;

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

    @media only screen and (min-width: 570px) {
        margin-top: 80px;
    }

`;

export default LoginContainer;