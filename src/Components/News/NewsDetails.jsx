import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSideNav from './../../Shared/RightSideNav/RightSideNav';
import { BsArrowLeft } from 'react-icons/bs';

const NewsDetails = () => {

    const news = useLoaderData();
    const { id } = useParams()

    const aNews = news.find(aNews => aNews._id === id)

    return (
        <div>
            <Header />
            <div className="grid md:grid-cols-4 gap-8">
                <div className="col-span-3">
                    <h4 className="text-xl font-semibold text-[#403F3F] mb-5">Dragon News</h4>
                    <div className="p-8 border rounded-md">
                        <img className="w-full" src={aNews.image_url} alt="" />
                        <h2 className="text-2xl font-bold text-[#403F3F] mt-5 mb-2">{aNews.title}</h2>
                        <p className="text-[#706F6F] mb-8">{aNews.details}</p>
                        <button className="btn text-white bg-[#D72050] text-xl font-medium px-6 py-2 hover:bg-rose-700">
                            <BsArrowLeft className="w-6 h-6"/> All news in this category</button>
                    </div>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;