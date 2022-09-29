import LoginContainer from "./style";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

const Login = ({ setLoginFailMessage, setRegisterSuccess, setRegisterFailMessage, hideLogin, animation }) => {
    const loginSchema = yup.object().shape({
        email: yup.string().email('Esse campo deve ser um email').required('Informe seu email'),
        password: yup.string().required('Informe sua senha')
    })
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const loginFn = data => {
        api.post('/user/login', data)
            .then(res => {
                localStorage.setItem('diet-buddy:token', res.data.token);
            })
            .catch(err => {
                setRegisterFailMessage(false);
                setRegisterSuccess(false);
                setLoginFailMessage(err.response.data.msg);
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

            <button className = 'login-submit'> Login </button>

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