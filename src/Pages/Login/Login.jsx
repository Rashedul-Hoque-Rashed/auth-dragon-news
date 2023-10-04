import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Login = () => {

    const { singIn } = useContext(AuthContext);
    const location = useLocation()
    const Navigate = useNavigate();

    const handelLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        singIn(email, password)
            .then(res => {
                console.log(res.user)
                
                Navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
            })

    }


    return (
        <div className="p-8">
            <Navbar />
            <div className="bg-[#FFF] mt-24 py-20 w-2/3 mx-auto border">
                <h2 className="text-[#403F3F] text-4xl font-semibold text-center pb-10 mx-20 border-b">Login your account</h2>
                <form onSubmit={handelLogin} className="card-body px-28">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Email address</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#403F3F] text-white hover:bg-zinc-800">Login</button>
                    </div>
                </form>
                <p className="text-center text-[#706F6F] font-semibold">Do not Have An Account ? <Link to="/register" className="text-[#F75B5F]">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;