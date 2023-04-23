import { Link } from 'react-router-dom';
import './login.scss';

const Login=()=>{
    return(
    <div className='login'>
        <h1>This is Login</h1>
        <button>Login</button>
        <Link to ='/register'>
        <button>Register instead</button>
        </Link>
        </div>
    );
}
export default Login;