import { Link } from 'react-router-dom';
import './login.scss';


const Login=()=>{
    return(
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Find Your Companion</h1>
                <p>Find people having similar
                    interests as yourself and build connections.
                    Explore the feeling of being able to talk 
                    to someone who shares the same interests as you.  
                </p>
                <span>Don't have an account?</span>
                <Link to ='/register'>
                <button>Register</button>
                </Link>  
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type='text' placeholder='Username/Email Id'/>
                    <input type='password' placeholder='Password'/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    
    </div>
    );
}
export default Login;