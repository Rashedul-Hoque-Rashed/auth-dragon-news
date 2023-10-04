import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res =>res.json())
        .then(data => setCategories(data))
    }, [])



    return (
        <div>
            <h4 className="text-[#403F3F] text-xl font-semibold mb-5">All Category</h4>
            {
                categories.map(category => <Link
                    className="block text-[#9F9F9F] text-xl font-medium px-12 py-5 hover:text-[#403F3F] hover:bg-zinc-200" 
                    to={`category/${category.id}`} 
                    key={category.id}
                    >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;