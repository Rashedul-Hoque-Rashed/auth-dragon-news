import moment from 'moment';

const Header = () => {
    return (
        <div  className="text-center">
            <img className="mx-auto mt-10 mb-5" src="https://i.ibb.co/B3WkJxJ/logo.png" alt="" />
            <h4 className="text-[#706F6F] text-lg">Journalism Without Fear or Favour</h4>
            <h3 className="text-xl font-medium text-[#706F6F] mb-8 mt-2"><span className="text-[#403F3F]">{moment().format("dddd, ")}</span> {moment().format("MMMM D, YYYY")}</h3>
        </div>
    );
};


export default Header;