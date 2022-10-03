import UserInfoContainer from "./style"

const UserInfo = ({ user }) => {

    return (
        <UserInfoContainer>
            <h2 className = 'user-info-name'> 
                Olá, {user.name} 
            </h2>

            <section className = 'user-info-macros-container'>
                <div className = 'user-info-macros carbs'> 
                    <span className = 'macros-name'> Carboidrato </span> 
                    <span className = 'macros-value'> 0.40g/kg </span>
                </div>
                <div className = 'user-info-macros protein'> 
                    <span className = 'macros-name'> Proteina </span>    
                    <span className = 'macros-value'> 0.88g/kg </span>
                </div>
                <div className = 'user-info-macros fat'> 
                    <span className = 'macros-name'> Gordura </span>     
                    <span className = 'macros-value'> 0.17g/kg </span>
                </div>
            </section>
        </UserInfoContainer>
    )
}

export default UserInfo