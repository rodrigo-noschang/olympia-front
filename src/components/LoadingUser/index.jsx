import ReatcLoading from "react-loading";
import LoadingUserContainer from "./style";

const LoadingUser = () => {

    return (
        <LoadingUserContainer>
            <div className = 'dashboard-loading-message'> Carregando dados do Usuário... </div>
            <ReatcLoading type = 'bars' color = '#E54E47' height = {45} width = {45}/>
        </LoadingUserContainer>
    )
}

export default LoadingUser;