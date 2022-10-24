import UserInfoContainer from "./style"
import { useUserContext } from "../../Providers/UserProvider";
import { useEffect } from "react";

const UserInfo = ({ user }) => {
    const { calculateMacros, 
        carbsTotalState, 
        proteinTotalState, 
        fatTotalState, 
        totalCalories, 
        bmr } = useUserContext();

    useEffect(() => {
        calculateMacros();
    }, [])


    return (
        <UserInfoContainer>
            <h2 className = 'user-info-name'> 
                Olá, {user.name} 
            </h2>

            <section className = 'user-info-macros-container'>
                <div className = 'user-info-macros carbs'> 
                    <span className = 'macros-name'> Carboidrato </span> 
                    <span className = 'macros-value'> {(carbsTotalState / user.weight).toFixed(2)}g/kg </span>
                </div>
                <div className = 'user-info-macros protein'> 
                    <span className = 'macros-name'> Proteina </span>    
                    <span className = 'macros-value'> {(proteinTotalState / user.weight).toFixed(2)}g/kg </span>
                </div>
                <div className = 'user-info-macros fat'> 
                    <span className = 'macros-name'> Gordura </span>     
                    <span className = 'macros-value'> {(fatTotalState / user.weight).toFixed(2)}g/kg </span>
                </div>

                <div className = 'user-info-consumed-calories-container'>
                    <div className = 'user-info-consumed-calories-text'>
                        Calorias na dieta:
                    </div>

                    <div className = 'user-info-consumed-calories-value'>
                        {totalCalories.toFixed(2)} Kcal
                    </div>
                </div>

                <div className = 'user-info-required-calories-container'>
                    <div className = 'user-info-required-calories-text'>
                        Calorias necessárias:
                    </div>

                    <div className = 'user-info-required-calories-value'>
                        {bmr.toFixed(2)} Kcal
                    </div>
                </div>

                <div className = 'user-info-calories-difference'> 
                    Saldo Calórico: {(totalCalories - bmr).toFixed(2)} Kcal
                </div>
            </section>

        </UserInfoContainer>
    )
}

export default UserInfo