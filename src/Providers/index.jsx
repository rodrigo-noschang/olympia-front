import { UserProvider } from "./UserProvider";

const Providers = ({ children }) => {

    return (
        <UserProvider>
            { children }
        </UserProvider>
    )
}

export default Providers;