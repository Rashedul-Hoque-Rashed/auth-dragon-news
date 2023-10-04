import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <div className="text-center w-full h-36 ">
            <span className="loading loading-dots loading-lg mt-72"></span>
        </div>
    }

    if(user){
        return children
    }


    return (
        <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
};

export default PrivateRouter;