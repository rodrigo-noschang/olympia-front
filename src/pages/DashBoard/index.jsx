import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';
import Header from "../../components/Header";
import LoadingUser from "../../components/LoadingUser";
import DashboardContainer from "./style";
import UserInfo from "../../components/UserInfo";
import MealTable from "../../components/MealTable";
import { useUserContext } from "../../Providers/UserProvider";
import ReactLoading from 'react-loading';
import Links from "../../components/Links";
import jwt_decode from 'jwt-decode';

const Dashboard = () => {
    const {userId} = useParams();
    const [loadingUser, setLoadingUser] = useState(false);
    const [loadNewMeal, setLoadNewMeal] = useState(false);
    const { user, setUser, mealsSeparation, separateMeals, addNewMeal} = useUserContext();
    const navigate = useNavigate();

    const checkTokenExpiration = (token) => {
        const now = new Date().getTime();
        const exp = new Date(token.expiration).getTime();
        
        const timeDiff = now - exp;

        if (timeDiff > 0) {
            localStorage.removeItem('diet-buddy:token');
            navigate('/');
        }
    }
    
    
    useEffect(() => {
        const token = localStorage.getItem('diet-buddy:token') || '';
        
        if (!token) {
            navigate('/');
        } else {
            // check if id in token is the same as the one in url
            const decodedToken = jwt_decode(token);
            if (decodedToken.user_id !== userId) navigate('/');

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

    const addMeal = () => {
        setLoadNewMeal(true);
        addNewMeal();
        setLoadNewMeal(false);
    }


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
                    <UserInfo user = {user} />

                    <section className = 'dashboard-table-container'>
                        { Object.keys(mealsSeparation).map((meal, index) => {
                            return <MealTable key = {`meal-${index + 1}`}
                                meal = {mealsSeparation[meal]}
                                mealNumber = {meal} />
                            })
                        }
                    </section>
                    
                    { !mealsSeparation['1'] &&
                    <div className = 'dashboard-empty-meals-message'>
                        Você ainda não possui refeições. Clique no botão abaixo para criá-las.
                    </div>
                    }

                    <button onClick = {addMeal} className = 'dashboard-add-meal'> 
                        { loadNewMeal &&
                            <ReactLoading className = 'dashboard-add-meal-load' type = 'bars' color = '#E54E47' height = {25} width = {25}/>
                        }
                        Adicionar Refeição 
                    </button>
                    <Links />
                </main>

            }
        </DashboardContainer>
    )
}

export default Dashboard;