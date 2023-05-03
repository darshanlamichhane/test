import { Link } from 'react-router-dom'
import './register.scss'

function Register() {
  return (
    <div className='register'>
      <div className='card'>
      <div className='left'>
        <h1>Register</h1>
        <form>
          <input type='text'placeholder='Username' />
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='text' placeholder='Full-Name' />
        </form>
      <button>Register</button>
      </div>
      <div className='right'>
      <h1>Find Your Companion</h1>
      <p>Find people having similar
                    interests as yourself and build connections.
                    Explore the feeling of being able to talk 
                    to someone who shares the same interests as you.  
      </p>
      <span>Already have an account?</span>
      
      <Link to ='/login'>
      <button style={{cursor:'pointer'}}>Login</button>
      </Link>
      </div>
      </div>
    </div>
  )
}

export default Register