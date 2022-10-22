import LoginContainer from "./style";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import ReactLoading from 'react-loading';
import { useState } from "react";

const Login = ({ setLoginFailMessage, setRegisterSuccess, setRegisterFailMessage, hideLogin, animation }) => {
    const [loadLogin, setLoadLogin] = useState(false);
    const navigate = useNavigate();

    const loginSchema = yup.object().shape({
        email: yup.string().email('Esse campo deve ser um email').required('Informe seu email'),
        password: yup.string().required('Informe sua senha')
    })
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const loginFn = data => {
        setLoadLogin(true);
        api.post('/user/login', data)
            .then(res => {
                const token = res.data.token
                localStorage.setItem('diet-buddy:token', token);

                const decodedToken = jwt_decode(token);
                navigate(`/dashboard/${decodedToken.user_id}`);
                
                setLoadLogin(false);
            })
            .catch(err => {
                setRegisterFailMessage(false);
                setRegisterSuccess(false);
                setLoginFailMessage(err.response.data.msg);
                setLoadLogin(false);
            })
    }

    return (
        <LoginContainer onSubmit = {handleSubmit(loginFn)} animation = {animation}>
            <header className = 'login-header'> Login </header>

            <section className = 'login-inputs'>
                <div className = 'login-input-container'>
                    <label className = 'login-label' htmlFor = 'login-email'> 
                        Email 
                    </label>
                    <input className = 'login-input' 
                        id = 'login-email' 
                        placeholder = 'Seu email'
                        autoFocus
                        {...register('email')}/>
                </div>
                {errors.email &&
                    <div className = 'login-input-error'>
                        {errors.email.message}
                    </div>
                }

                <div className = 'login-input-container'>
                    <label className = 'login-label' htmlFor = 'login-password'> 
                        Senha 
                    </label>
                    <input className = 'login-input' 
                        id = 'login-password' 
                        type = 'password'
                        placeholder = 'Sua senha'
                        {...register('password')}/>
                </div>
                {errors.password &&
                    <div className = 'login-input-error'>
                        {errors.password.message}
                    </div>
                }
            </section>

            <button className = 'login-submit' disabled = {loadLogin}> 
                { loadLogin ?
                    <>
                        <span className = 'login-submit-loading'> Logando... </span>
                        <ReactLoading className = 'login-form-load' type = 'bars' color = '#302E31' height = {25} width = {25}/> 
                    </>
                :
                    <span>
                        Login
                    </span>
                }
            </button>

            <div className = 'login-to-register'>
                Não tem conta?
                <span className = 'login-register-link' onClick = {hideLogin}> 
                    Cadastre-se 
                </span>
            </div>
        </LoginContainer>
    )
}

export default Login;