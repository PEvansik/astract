

import './Navbar.css'



const Mobilenav = ({show}) => {
    return (
        <div className='mobile-list' >
            <div className='mobile-nav-items'>
                <p>Blog</p>
                <p>Donations</p>
                <p>About us</p>
                <p className='custom-select'>
                    <select>
                        <option value="0">In Africa</option>
                        <option value="1">Nigeria</option>
                        <option value="2">Cameroun</option>
                        <option value="3">Gambia</option>
                    </select>
                </p>
            </div>
    </div>
    )

}


export default Mobilenav