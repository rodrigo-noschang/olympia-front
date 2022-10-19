import HeaderContainer from "./style";
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('diet-buddy:token') || '';

    const logout = () => {
        localStorage.removeItem('diet-buddy:token');
        navigate('/');
    }

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