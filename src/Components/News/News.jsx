import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



const News = ({ news }) => {



    const { author, title, image_url, details, rating, total_view, _id } = news;

    return (
        <div className="border rounded-lg mb-8">
            <div className="bg-[#F3F3F3] flex items-center justify-between p-5">
                <div className="flex gap-4 items-center">
                    <div>
                        <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
                    </div>
                    <div>
                        <h4 className="text-[#403F3F] text-base font-semibold">{author.name}</h4>
                        <p className="text-[#706F6F] text-sm font-normal">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaBookmark></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </div>
            <div className="p-5">
                <h2 className="text-xl font-bold text-[#403F3F] mb-5">{title}</h2>
                <img src={image_url} alt="" />

                {
                    details.length > 200 ? <p className="text-[#706F6F] text-base font-normal mt-8 mb-5 pb-5 border-b-2">{details.slice(0, 200)}<Link to={`/news/${_id}`} className="p-0">... <span className="text-blue-700 font-semibold">Read More</span></Link>
                    </p> :
                        <p className="text-[#706F6F] text-base font-normal mt-8 mb-5 pb-5 border-b-2">{details}
                        </p>

                }


                <div className="flex justify-between items-center text-[#706F6F]">
                    <div className="flex item-center gap-2">
                        <Rating
                            initialRating={rating.number}
                            emptySymbol={<AiOutlineStar className="text-orange-300 w-6 h-6" />}
                            fullSymbol={<AiFillStar className="text-orange-300 w-6 h-6" />}
                        ></Rating>
                        <p>{rating.number}</p>
                    </div>
                    <div className="flex item-center gap-2">
                        <FaEye className="w-6 h-6"></FaEye>
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;

News.propTypes = {
    news: PropTypes.object
}