import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto font-poppins md:px-10">
            <Outlet />
        </div>
    );
};

export default Root;