import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path = '/header' element = {<Header />}/>
        </Routes>
    )
}

export default AppRoutes