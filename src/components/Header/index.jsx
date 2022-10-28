import HeaderContainer from "./style";
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwt_decode from 'jwt-decode';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('diet-buddy:token') || '';

    const logout = () => {
        localStorage.removeItem('diet-buddy:token');
        navigate('/');
    }

    useEffect(() => {
        if (token) {
            const { user_id } = jwt_decode(token)
            navigate(`/dashboard/${user_id}`)
        }
    }, [])

    return (
        <HeaderContainer>
            <h1 className = 'header-title'> Diet Buddy </h1>
            
            { token &&
                <p className = 'header-logout-container' onClick = {logout}> 
                    <AiOutlineLogout /> 
                    <span className = 'header-logout-text'> Logout </span>
                </p>
            }
        </HeaderContainer>
    )
}

export default Header;