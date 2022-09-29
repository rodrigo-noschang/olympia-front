import { Routes, Route } from 'react-router-dom';
import RegisterLogin from '../pages/RegisterLogin';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path = '/' element = {<RegisterLogin />}/>
        </Routes>
    )
}

export default AppRoutes