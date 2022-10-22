import styled, {keyframes} from 'styled-components';

const appearFromTopMobile = keyframes`
    from {
        opacity: 0;
        transform: translateY(-200px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
`;

const disappearToTopMobile = keyframes`
    from {
        opacity: 1;
        transform: translateY(0px);
    }

    to {
        opacity: 0;
        transform: translateY(-200px);
    }
`;

const disappearToLeft = keyframes`
    from {
        opacity: 1;
        transform: translateX(50%);
    }

    to {
        opacity: 0;
        transform: translateX(-300px);
    }
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50%);
    }

    to {
        opacity: 1;
        transform: translateX(50%);
    }

`;

const RegisterContainer = styled.form`
    width: 90vw;
    max-width: 510px;
    padding: 20px 10px;
    background-color: var(--background-black);
    animation-name: ${props => props.animation === 'hide-register' ? disappearToTopMobile : props.animation === 'hide-login' ? appearFromTopMobile : ''};
    animation-duration: 1s;

    .register-form-access {
        padding-top: 10px;
        margin-bottom: 40px;
        border-top: 1px solid #fff;
        position: relative;
    }

    .register-form-access::before {
        content: 'Acesso';
        display: block;
        padding: 5px 10px;
        background-color: var(--background-black);
        position: absolute;
        top: -15px;
        left: 20px;
        color: #fff;
    }

    .register-form-header {
        color: #fff;
        font-size: 22px;
        margin-bottom: 20px;
    }

    .register-form-input-container {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    }

    .register-form-label {
        color: var(--text-red);
        font-size: 20px;
    }

    .register-form-input {
        font-size: 16px;
        flex-grow: .6;
        padding: 2px 5px;
    }

    .register-form-error-message {
        text-align: center;
        color: red;
        font-style: italic;
        margin-top: -10px;
        font-size: 14px;
    }

    .error-no-margin {
        margin-top: 0;
    }

    .confirm-password-container {
        flex-direction: column;
    }

    .confirm-password-label {
        margin-bottom: 10px;
    }

    .register-form-personal-container {
        position: relative;
        border-top: 1px solid #fff;
        padding-top: 10px;
    }

    .register-form-personal-container::before {
        content: 'Físico';
        display: block;
        padding: 5px 10px;
        background-color: var(--background-black);
        position: absolute;
        top: -15px;
        left: 20px;
        color: #fff;
    }

    .register-form-gender-label {
        font-family: 'Urbanist', sans-serif;
        color: #fff;
    }

    .register-form-gender-input {
        margin-right: 5px;
    }

    #gender-female {
        margin-left: 15px;
    }

    .register-form-physical {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .register-form-physical-input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 5px;
    }

    .register-form-physical-input-container input {
        width: 80px;
    }

    .register-form-register {
        padding: 5px 15px;
        border: none;
        border-radius: 5px;
        font-size: 18px;
        display: block;
        margin: 20px auto 0;
        background-color: var(--background-black);
        color: var(--text-red);
        box-shadow: 0 0 3px 1px #FFF;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .register-form-register:hover {
        background-color: #f3f3f3;
        color: var(--background-black);
        transition: .3s;
    }

    .register-form-register:active {
        box-shadow: 0 0 8px 1px #fff;
        background-color: var(--background-black);
        color: #f3f3f3;
    }

    .register-form-register[disabled] {
        background-color: var(--light-grey);
        color: var(--background-black);
        cursor: not-allowed;
    }

    .register-submit-loading {
        font-style: italic;
    }

    .register-form-load {
        margin-left: 15px;
    }

    .register-form-to-login {
        color: #f3f3f3;
        text-align: center;
        margin-top: 20px;
    }

    .register-form-login-link {
        font-family: var(--text-font);
        font-weight: bold;
        cursor: pointer;
        border-bottom: 1px solid transparent;
        margin-left: 10px;
    }

    .register-form-login-link:hover {
        border-bottom-color: #FFF;
        color: #FFF;
        transition: .3s;
    }

    .register-form-login-link:active {
        color: var(--background-black);
    }

    @media only screen and (min-width: 350px) {
        .register-form-physical {
            justify-content: space-around;
        }
    }

    @media only screen and (min-width: 480px) {
        .register-form-passwords-container {
            display: flex;
            justify-content: space-between;
        }

        .password-container {
            flex-direction: column;
        }

        .confirm-password-container, .password-container {
            align-items: center;
        }

        .confirm-password-label {
            margin-bottom: 0;
        }

        .gender-container {
            justify-content: space-around;
        }
    }

    @media only screen and (min-width: 1530px) {
        animation-name: ${props => props.animation === 'hide-register' ? disappearToLeft : props.animation === 'hide-login' ? appearFromLeft : ''};
    }
`;

export default RegisterContainer;