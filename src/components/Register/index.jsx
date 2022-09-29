import RegisterContainer from "./style"

const Register = () => {

    return (
        <RegisterContainer>
            <header className = 'register-form-header'> Registre-se </header>

            <section className = 'register-form-access'>
                <div className = 'register-form-input-container'>
                    <label htmlFor = 'register-name' className = 'register-form-label'> 
                        Nome 
                    </label>
                    <input id = 'register-name' 
                        placeholder = 'Seu nome' 
                        className = 'register-form-input'/>
                </div>

                <div className = 'register-form-input-container'>
                    <label htmlFor = 'register-email' className = 'register-form-label'> 
                        Email 
                    </label>
                    <input id = 'register-email' 
                        placeholder = 'Seu email' 
                        className = 'register-form-input'/>
                </div>

                <div className = 'register-form-passwords-container'>
                    <div className = 'register-form-input-container password-container'>
                        <label htmlFor = 'register-password' className = 'register-form-label'>
                                Senha 
                        </label>
                        <input id = 'register-password' 
                            type = 'password'
                            placeholder = 'Sua senha' 
                            className = 'register-form-input'/>
                    </div>

                    <div className = 'register-form-input-container confirm-password-container'>
                        <label htmlFor = 'register-confirm-password' className = 'register-form-label confirm-password-label'> 
                            Confirme sua senha 
                        </label>
                        <input id = 'register-confirm-password' 
                            type = 'password'
                            placeholder = 'Confirme sua senha' 
                            className = 'register-form-input'/>
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
                            className = 'register-form-gender-input'/>
                        <label htmlFor = 'gender-male' className = 'register-form-gender-label'> 
                            Masculino
                        </label>

                        <input type = 'radio'
                            id = 'gender-female'
                            value = 'F'
                            name = 'gender-option'
                            className = 'register-form-gender-input'/>
                        <label htmlFor = 'gender-female' className = 'register-form-gender-label'> 
                            Feminino 
                        </label>
                    </div>
                </div>

                <div className = 'register-form-physical'>
                    <div className = 'register-form-physical-input-container'>
                        <label htmlFor = 'physical-height' className = 'register-form-label'>
                            Altura (cm)
                        </label>
                        <input type="text" placeholder = 'Sua altura' id = 'physical-height'/>
                    </div>

                    <div className = 'register-form-physical-input-container'>
                        <label htmlFor = 'physical-weight' className = 'register-form-label'>
                            Peso (Kg)
                        </label>
                        <input type="text" placeholder = 'Seu peso' id = 'physical-weight'/>
                    </div>

                    <div className = 'register-form-physical-input-container'>
                        <label htmlFor = 'physical-age' className = 'register-form-label'>
                            Idade (anos)
                        </label>
                        <input type="text" placeholder = 'Sua idade' id = 'physical-age'/>
                    </div>
                </div>
            </section>
        </RegisterContainer>
    )
}

export default Register