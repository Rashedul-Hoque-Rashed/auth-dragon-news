import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftsideNav/LeftSideNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightsideNav";
import Latest from "./Latest";
import News from "../../Components/News/News";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const news = useLoaderData();
    

    return (
        <div>
            <Header />
            <Latest />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
                <div>
                    <LeftSideNav />
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-[#403F3F] text-xl font-semibold mb-5">Dragon News Home</h4>
                    
                    {
                        news.map(aNews => <News key={aNews._id} news={aNews}></News>)
                    }
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;