import UserInfoContainer from "./style"
import { useUserContext } from "../../Providers/UserProvider";
import { useEffect, useState } from "react";
import UserEdit from "../UserEdit";

const UserInfo = ({ user }) => {
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);

    const { calculateMacros, 
        carbsTotalState, 
        proteinTotalState, 
        fatTotalState, 
        totalCalories, 
        bmr } = useUserContext();

    useEffect(() => {
        calculateMacros();
    }, [])

    const openEditor = () => {
        setEdit(true);
    }

    const closeEditor = () => {
        setEdit(false);
    }

    return (
        <UserInfoContainer>
            <section className = 'user-info-container'>
                <h2 className = 'user-info-name'> 
                    Olá, {user.name.split(' ')[0]} 
                </h2>
                {!edit ?
                    <>
                        <div className = 'user-info-data-container'> 
                            <div>
                                <div className = 'user-info-label'> Altura (cm) </div>
                                <div className = 'user-info-value'> {user.height} </div>
                            </div>

                            <div>
                                <div className = 'user-info-label'> Peso (Kg) </div>
                                <div className = 'user-info-value'> {user.weight.toFixed(1)} </div>
                            </div>

                            <div>
                                <div className = 'user-info-label'> Idade </div>
                                <div className = 'user-info-value'> {user.age} </div>
                            </div>
                        </div>
                        <div className = 'user-info-update'>
                            <span className = 'user-info-update-clickable' onClick = {openEditor}> 
                                Atualizar dados 
                            </span>
                        </div>
                        { error && 
                            <div className = 'user-update-error-message'> Algo deu errado </div>
                        }
                    </>
                    :
                        <UserEdit user = {user} closeEditor = {closeEditor} setError = {setError}/>
                    }
            </section>

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