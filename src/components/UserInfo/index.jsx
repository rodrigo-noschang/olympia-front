import { useState, useEffect } from "react"
import UserInfoContainer from "./style"

const UserInfo = ({ user }) => {
    const [totalCarbs, setTotalCarbs] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalFat, setTotalFat] = useState(0);


    useEffect(() => {
        let carbs = 0;
        let protein = 0;
        let fat = 0;

        for (let i = 0; i < user.foods.length; i++) {
            carbs += user.foods[i].carbs;
            protein += user.foods[i].protein;
            fat += user.foods[i].fat;
        }

        setTotalCarbs(carbs);
        setTotalProtein(protein);
        setTotalFat(fat);
    }, [])


    return (
        <UserInfoContainer>
            <h2 className = 'user-info-name'> 
                Olá, {user.name} 
            </h2>

            <section className = 'user-info-macros-container'>
                <div className = 'user-info-macros carbs'> 
                    <span className = 'macros-name'> Carboidrato </span> 
                    <span className = 'macros-value'> {(totalCarbs / user.weight).toFixed(2)}g/kg </span>
                </div>
                <div className = 'user-info-macros protein'> 
                    <span className = 'macros-name'> Proteina </span>    
                    <span className = 'macros-value'> {(totalProtein / user.weight).toFixed(2)}g/kg </span>
                </div>
                <div className = 'user-info-macros fat'> 
                    <span className = 'macros-name'> Gordura </span>     
                    <span className = 'macros-value'> {(totalFat / user.weight).toFixed(2)}g/kg </span>
                </div>
            </section>
        </UserInfoContainer>
    )
}

export default UserInfo