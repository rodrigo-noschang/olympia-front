import Header from "../../components/Header";
import RegisterLoginContainer from "./style";
import Register from "../../components/Register";
import Login from "../../components/Login";
import { useState } from "react";

const RegisterLogin  = () => {
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [registerFailMessage, setRegisterFailMessage] = useState(false);
    const [loginFailMessage, setLoginFailMessage] = useState(false);

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
                {/* <Register setRegisterSuccess = {setRegisterSuccess} setRegisterFailMessage = {setRegisterFailMessage}/> */}
                <Login setLoginFailMessage = {setLoginFailMessage}/>
            </div>
        </RegisterLoginContainer>
    )

}

export default RegisterLogin;;