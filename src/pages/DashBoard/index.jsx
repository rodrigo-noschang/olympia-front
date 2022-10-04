import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';
import Header from "../../components/Header";
import LoadingUser from "../../components/LoadingUser";
import DashboardContainer from "./style";
import UserInfo from "../../components/UserInfo";
import MealTable from "../../components/MealTable";
import { useUserContext } from "../../Providers/UserProvider";

const Dashboard = () => {
    const {userId} = useParams();
    const [loadingUser, setLoadingUser] = useState(false);
    const { user, setUser, mealsSeparation, separateMeals} = useUserContext();

    useEffect(() => {
        if (!user.id) {
            setLoadingUser(true);
            api.get(`/user/${userId}`)
                .then(res => {
                    setUser(res.data);
                    setLoadingUser(false);
                    separateMeals(res.data.foods);
                })
                .catch(err => {
                    setLoadingUser(false)
                })
        }
    }, [])

    return (
        <DashboardContainer>
            <Header />
            { loadingUser && 
                <LoadingUser />
            }
            { !user.id ?
                <div className = 'dashboard-user-not-found-container'>
                    Usuário não encontrado...
                </div>
                :
                <main className = 'dashboard-user-info-container'>
                    <UserInfo user = {user}/>

                    <section className = 'dashboard-table-container'>
                        { Object.keys(mealsSeparation).map((meal, index) => {
                            return <MealTable key = {`meal-${index + 1}`}
                                meal = {mealsSeparation[meal]}
                                mealNumber = {meal} />
                            })
                        }
                    </section>
                </main>

            }
        </DashboardContainer>
    )
}

export default Dashboard;