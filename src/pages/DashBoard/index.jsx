import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';
import Header from "../../components/Header";
import LoadingUser from "../../components/LoadingUser";
import DashboardContainer from "./style";

const Dashboard = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});
    const [loadingUser, setLoadingUser] = useState(false);
    const [userNotFound, setUserNotFound] = useState('');

    useEffect(() => {
        if (!user.id) {
            setLoadingUser(true);
            api.get(`/user/${userId}`)
                .then(res => {
                    setUser(res.data);
                    setLoadingUser(false)
                })
                .catch(err => {
                    console.log(err.response.data.msg);
                    setLoadingUser(false)
                    setUserNotFound(err.response.data.msg);
                })
        }
    }, [])

    return (
        <DashboardContainer>
            <Header />
            { loadingUser && 
                <LoadingUser />
            }
            { userNotFound ?
                <div className = 'dashboard-user-not-found-container'>
                    {userNotFound}...
                </div>
                :
                <div> {user.name} </div>

            }
        </DashboardContainer>
    )
}

export default Dashboard;