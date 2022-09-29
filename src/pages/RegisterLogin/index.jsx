import Header from "../../components/Header";
import RegisterLoginContainer from "./style";
import Register from "../../components/Register";
import Login from "../../components/Login";
import { useState } from "react";

const RegisterLogin  = () => {
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [registerFailMessage, setRegisterFailMessage] = useState(false);
    const [loginFailMessage, setLoginFailMessage] = useState(false);
    const [showRegsiter, setShowRegister] = useState(true);
    const [showLogin, setShowLogin] = useState(false);
    const [animation, setAnimation] = useState(''); // Tells what animation to run (hide register or hide login)

    const hideRegister = () => {
        setShowLogin(true);
        setAnimation('hide-register');
        setTimeout(() => {
            setShowRegister(false);
            setAnimation('');
        }, 1000)
    }

    const hideLogin = () => {
        setShowRegister(true);
        setAnimation('hide-login');
        setTimeout(() => {
            setShowLogin(false);
            setAnimation('');
        }, 1000)
    }


    return (
        <RegisterLoginContainer>
            <Header />
            { registerFailMessage && // message when user is not cretaed
                <div className = 'register-fail-message'>
                    {registerFailMessage}
                    <span className = 'close-register-fail-message' onClick = {() => {setRegisterFailMessage('')}}> 
                        x 
                    </span>
                </div>
            }

            { registerSuccess && // message when user is created OK
                <div className = 'register-success-message'>
                    Sua conta foi criada com sucesso   
                    <span className = 'close-register-success-message' onClick = {() => {setRegisterSuccess(false)}}> 
                        x 
                    </span>   
                </div>
            }

            { loginFailMessage &&
                <div className = 'login-fail-message'>
                    {loginFailMessage}
                    <span className = 'close-login-fail-message' onClick = {() => {setLoginFailMessage(false)}}> 
                        x 
                    </span>   
                </div>
            }

            <div className = 'register-login-container'>
                { showRegsiter &&
                    <Register setRegisterSuccess = {setRegisterSuccess} 
                        setRegisterFailMessage = {setRegisterFailMessage}
                        setLoginFailMessage = {setLoginFailMessage}
                        hideRegister = {hideRegister}
                        animation = {animation}/>
                }

                { showLogin &&
                    <Login setLoginFailMessage = {setLoginFailMessage}
                        setRegisterSuccess = {setRegisterSuccess} 
                        setRegisterFailMessage = {setRegisterFailMessage}
                        hideLogin = {hideLogin}
                        animation = {animation}/>
                }
            </div>
        </RegisterLoginContainer>
    )

}

export default RegisterLogin;;