import Header from "../../Shared/Header/Header";
import RightSideNav from './../../Shared/RightSideNav/RightSideNav';

const NewsDetails = () => {



    return (
        <div>
            <Header />
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h4 className="text-xl font-semibold text-[#403F3F]">Dragon News</h4>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;