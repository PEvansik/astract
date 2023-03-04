

import './Navbar.css'

const Auth = ({dom}) => {
    return (
        <div className='auth'>
            <a href="/#" className='signup'>sign up</a>
            <a href="/#" className='login'>{dom}</a>
        </div>
    )
}

export default Auth