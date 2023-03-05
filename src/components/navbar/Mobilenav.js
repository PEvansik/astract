

import './Navbar.css'


// add a click event to the menu items so it closes after it has been clicked

const Mobilenav = ({show}) => {
    return (

            <div className='mobile-nav-items'>
                <p className='blog'><a href="">Blog</a></p>
                <p className='donations'><a href="">Donations</a></p>
                <p className='aboutus'><a href="">About us</a></p>
                <p className='custom-select'>
                    <select name='dropdown' id='dropdown'>
                        <option selected disabled><a href="">In Africa</a></option>
                        <option value="Nigeria"><a href="">Nigeria</a></option>
                        <option value="Cameroun"><a href="">Cameroun</a></option>
                        <option value="Gambia"><a href="">Gambia</a></option>
                    </select>
                </p>
            </div>

    )

}


export default Mobilenav