import RegisterContainer from "./style"
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api";
import ReactLoading from 'react-loading';
import { useState } from "react";

const Register = ({ setRegisterSuccess, setRegisterFailMessage, setLoginFailMessage, hideRegister, animation }) => {
    const [loadRegsiter, setLoadRegister] = useState(false);
    const formSchema = yup.object().shape({
        name:            yup.string().required('Nome é obrigatório'),
        email:           yup.string().email('Informe um email válido').required('Email é obrigatório'),
        password:        yup.string().required('Senha é obrigatório'),
        confirmPassword: yup.string().required('Confirme sua senha').oneOf([yup.ref('password'), null], 'Senhas precisam ser iguais'),
        gender:          yup.string().required('Informe seu gênero').min(1),
        height:          yup.number().required(),
        weight:          yup.number().required('Informe seu peso'),
        age:             yup.number().required('Informe sua idade')
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(formSchema)
    });

    const submitForm = (data) => {
        setLoadRegister(true);
        setRegisterFailMessage('')
        setRegisterSuccess(false)

        const {confirmPassword, ...registerData} = data;
        
        api.post('/user', registerData)
            .then(res => {
                setRegisterSuccess(true);
                setLoadRegister(false);
                setLoginFailMessage(false);
                
                hideRegister();
            })
            .catch(err => {
                setRegisterFailMessage(err.response.data.msg);
                setLoadRegister(false);
            })
    }

    return (
        <RegisterContainer onSubmit = {handleSubmit(submitForm)} animation = {animation}>
            <header className = 'register-form-header'> Registre-se </header>

            <section className = 'register-form-access'>
                <div className = 'register-form-input-container'>
                    <label htmlFor = 'register-name' className = 'register-form-label'> 
                        Nome 
                    </label>
                    <input id = 'register-name' 
                        placeholder = 'Seu nome' 
                        className = 'register-form-input'
                        {...register('name')}/>
                </div>
                { errors.name &&
                    <div className = 'register-form-error-message'>
                        {errors.name.message}
                    </div>
                }

                <div className = 'register-form-input-container'>
                    <label htmlFor = 'register-email' className = 'register-form-label'> 
                        Email 
                    </label>
                    <input id = 'register-email' 
                        placeholder = 'Seu email' 
                        className = 'register-form-input'
                        {...register('email')}/>
                </div>
                { errors.email &&
                    <div className = 'register-form-error-message'>
                        {errors.email.message}
                    </div>
                }

                <div className = 'register-form-passwords-container'>
                    <div className = 'register-form-input-error-container'>
                        <div className = 'register-form-input-container password-container'>
                            <label htmlFor = 'register-password' className = 'register-form-label'>
                                    Senha 
                            </label>
                            <input id = 'register-password' 
                                type = 'password'
                                placeholder = 'Sua senha' 
                                className = 'register-form-input'
                                {...register('password')}/>
                        </div>
                        { errors.password &&
                            <div className = 'register-form-error-message'>
                                {errors.password.message}
                            </div>
                        }
                    </div>

                    <div className = 'register-form-input-error-container'>
                        <div className = 'register-form-input-container confirm-password-container'> 
                            <label htmlFor = 'register-confirm-password' className = 'register-form-label confirm-password-label'> 
                                Confirme sua senha 
                            </label>
                            <input id = 'register-confirm-password' 
                                type = 'password'
                                placeholder = 'Confirme sua senha' 
                                className = 'register-form-input'
                                {...register('confirmPassword')}/>
                        </div>
                        { errors.confirmPassword &&
                            <div className = 'register-form-error-message'>
                                {errors.confirmPassword.message}
                            </div>
                        }
                    </div>
                </div>
            </section>

            <section className = 'register-form-personal-container'>
                <div className = 'register-form-input-container gender-container'>
                    <span className = 'register-form-label'> Gênero </span>
                    <div className = 'register-form-gender-container'>
                        <input type = 'radio'
                            id = 'gender-male'
                            value = 'M'
                            name = 'gender-option'
                            className = 'register-form-gender-input'
                            {...register('gender')}/>
                        <label htmlFor = 'gender-male' className = 'register-form-gender-label'> 
                            Masculino
                        </label>

                        <input type = 'radio'
                            id = 'gender-female'
                            value = 'F'
                            name = 'gender-option'
                            className = 'register-form-gender-input'
                            {...register('gender')}/>
                        <label htmlFor = 'gender-female' className = 'register-form-gender-label'> 
                            Feminino 
                        </label>
                        { errors.gender &&
                            <div className = 'register-form-error-message error-no-margin'>
                                Informe seu gênero
                            </div>
                        }
                    </div>
                </div>

                <div className = 'register-form-physical'>
                    <div className = 'register-form-physical-input-container'>
                        <label htmlFor = 'physical-height' className = 'register-form-label'>
                            Altura (cm)
                        </label>
                        <input min = '0' type="number" 
                            placeholder = 'Sua altura' 
                            id = 'physical-height'
                            {...register('height')}/>
                        { errors.height &&
                            <div className = 'register-form-error-message error-no-margin'>
                                Informe sua altura
                            </div>
                        }
                    </div>

                    <div className = 'register-form-physical-input-container'>
                        <label htmlFor = 'physical-weight' className = 'register-form-label'>
                            Peso (Kg)
                        </label>
                        <input min = '0' type="number" 
                            placeholder = 'Seu peso' 
                            id = 'physical-weight'
                            {...register('weight')}/>
                        { errors.weight &&
                            <div className = 'register-form-error-message error-no-margin'>
                                Informe seu peso
                            </div>
                        }
                    </div>

                    <div className = 'register-form-physical-input-container'>
                        <label htmlFor = 'physical-age' className = 'register-form-label'>
                            Idade (anos)
                        </label>
                        <input min = '0' type="number" 
                            placeholder = 'Sua idade' 
                            id = 'physical-age'
                            {...register('age')}/>
                        { errors.age &&
                            <div className = 'register-form-error-message error-no-margin'>
                                Informe seu peso
                            </div>
                        }
                    </div>
                </div>
            </section>

            <button className = 'register-form-register'> 
                Registrar
                { loadRegsiter &&
                    <ReactLoading className = 'register-form-load' type = 'bars' color = '#E54E47' height = {25} width = {25}/> 
                }
            </button>

            <div className = 'register-form-to-login'>
                Já tem uma conta?
                <span className = 'register-form-login-link' onClick = {hideRegister}> 
                    Faça login 
                </span>
            </div>
        </RegisterContainer>
    )
}

export default Register