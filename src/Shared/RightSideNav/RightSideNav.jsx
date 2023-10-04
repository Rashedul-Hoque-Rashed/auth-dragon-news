import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='mb-8'>
                <h4 className="text-xl font-semibold text-[#403F3F]">Login With</h4>
                <button className="btn btn-outline text-blue-500 w-full my-3 normal-case hover:text-white hover:bg-blue-500"><FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn btn-outline text-black w-full normal-case  hover:text-white hover:bg-black"><FaGithub/> Login With Github</button>
            </div>
            <div className='mb-8'>
                <h4 className="text-xl mb-6 font-semibold text-[#403F3F]">Find Us On</h4>
                <div className='flex item-center gap-3 border rounded-t-lg p-4'>
                <FaFacebook className='w-7 h-7 text-blue-500'/> 
                <a className='text-xl font-medium' href="">Facebook</a>
                </div>
                <div className='flex item-center gap-3 border rounded-y-lg p-4'>
                <FaTwitter className='w-7 h-7 text-blue-400'/> 
                <a className='text-xl font-medium' href="">Twitter</a>
                </div>
                <div className='flex item-center gap-3 border rounded-b-lg p-4'>
                <FaInstagram className='w-7 h-7 text-red-500'/> 
                <a className='text-xl font-medium' href="">Instagram</a>
                </div>
            </div>
            <div className='mb-8 bg-[#F3F3F3]'>
                <h4 className="text-xl mb-9 font-semibold text-[#403F3F] bg-[#F3F3F3] p-4">Q-Zone</h4>
                <img className='mx-auto mb-9' src={qZone1} alt="" />
                <img className='mx-auto mb-9' src={qZone2} alt="" />
                <img className='mx-auto pb-7' src={qZone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;