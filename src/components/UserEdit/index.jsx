import UserEditContainer from "./style";
import { useUserContext } from "../../Providers/UserProvider";
import api from "../../services/api";
import { useState } from "react";
import ReactLoading from 'react-loading';

const UserEdit = ({ user, closeEditor, setError }) => {
    const { setUser } = useUserContext();
    const [loadingUpdate, setLoadingUpdate] = useState(false);

    const updateUserData = () => {
        setLoadingUpdate(true);

        const newHeight = Number(document.querySelector('#height').value);
        const newWeight = Number(document.querySelector('#weight').value);
        const newAge = Number(document.querySelector('#age').value);

        const updatedData = {
            height: newHeight, 
            weight: newWeight,
            age: newAge
        }

        const updatedUser = {...updatedData}
        const token = localStorage.getItem('diet-buddy:token');

        api.patch(`/user/${user.id}`, updatedUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            setLoadingUpdate(false);
            setUser({...user, ...updatedUser});
            closeEditor();
        })
        .catch(err => {
            console.log(err);
            closeEditor();
            setError(true)
            setLoadingUpdate(false);
        })
    }


    return (
        <UserEditContainer loading = {loadingUpdate.toString()}>
            <div className = 'user-update-container'>
                <div>
                    <label className = 'user-info-label' htmlFor = 'height'> Altura (m) </label>
                    <div className = 'user-input-container'>
                        <input className = 'user-info-value' 
                            id = 'height'
                            placeholder = 'Altura'
                            defaultValue = {user.height}/>
                    </div>
                </div>

                <div>
                <label className = 'user-info-label' htmlFor = 'weight'> Peso (Kg) </label>
                    <div className = 'user-input-container'>
                        <input className = 'user-info-value' 
                            id = 'weight'
                            placeholder = 'Peso'
                            defaultValue = {user.weight}/>
                    </div>
                </div>

                <div>
                <label className = 'user-info-label' htmlFor = 'age'> Age </label>
                    <div className = 'user-input-container'>
                        <input className = 'user-info-value' 
                            id = 'age'
                            placeholder = 'Idade'
                            defaultValue = {user.age}/>
                    </div>
                </div>
            </div>

            <div className = 'user-info-update'>
                <button className = 'user-info-update-clickable' onClick = {updateUserData} disabled = {loadingUpdate}> 
                    Salvar Atualizações 
                </button>
                {loadingUpdate &&
                    <ReactLoading className = 'register-form-load' type = 'bars' color = '#4d4dbd' height = {12} width = {12}/>
                }
            </div>
        </UserEditContainer>
    )

}

export default UserEdit;