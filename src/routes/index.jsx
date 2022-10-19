import { Routes, Route } from 'react-router-dom';
import RegisterLogin from '../pages/RegisterLogin';
import Dashboard from '../pages/DashBoard';

const AppRoutes = () => {
    const token = localStorage.getItem('diet-buddy:token') || '';

    return (
        <Routes>
            <Route exact path = '/' element = {<RegisterLogin />}/>
            <Route path = '/dashboard/:userId' element = {<Dashboard />}/>
        </Routes>
    )
}

export default AppRoutes