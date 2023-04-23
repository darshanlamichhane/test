import { Link } from 'react-router-dom'
import './register.scss'


function Register() {
  return (
    <div className='register'>
      <h1>This is register</h1>
      <button>Register</button>
      <Link to ='/login'>
      <button>Login Instead</button>
      </Link>
    </div>
  )
}

export default Register
