import { Link } from 'react-router-dom';
import Navbar from './../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext/Auth';
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-3xl text-center'>Please Login</h2>
            <div className='mx-auto md:w-3/4 lg:w-1/2'>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center'>Do not have any account, Please <Link to='/register' className='text-blue-600'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;