import Marquee from "react-fast-marquee";

const Latest = () => {
    return (
        <div className="bg-[#F3F3F3] mb-5 flex">
            <button className="bg-[#D72050] text-[#FFF] px-6 py-2 rounded-none m-4">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default Latest;