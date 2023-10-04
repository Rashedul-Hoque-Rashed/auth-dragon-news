import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);


    const handelRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        

        console.log(name, photo, email,password)

        createUser(email, password)
        .then(res => {
            console.log(res.user)
        })
        .catch(error => {
            console.error(error)
        })

    }


    return (
        <div className="p-8">
            <Navbar />
            <div className="bg-[#FFF] mt-24 py-20 w-2/3 mx-auto border">
                <h2 className="text-[#403F3F] text-4xl font-semibold text-center pb-10 mx-20 border-b">Register your account</h2>
                <form onSubmit={handelRegister} className="card-body px-28">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your photo URL" name="photo" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
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
                    </div>
                    <div className="flex gap-2 mt-2">
                        <input type="checkbox" name="checkbox" required />
                        <p className="text-[#706F6F]">Accept Term & Conditions</p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#403F3F] text-white hover:bg-zinc-800">Register</button>
                    </div>
                </form>
                <p className="text-center text-[#706F6F] font-semibold">Already Have An Account ? <Link to="/login" className="text-[#F75B5F]">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;