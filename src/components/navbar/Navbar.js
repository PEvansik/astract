
import useWindowResize from '../../hooks/useWindowResize'
import Hernalytics from '../asset/navbar/Hernalytics.svg'
import closemenu from '../asset/navbar/closemenu.svg'
import openmenu from '../asset/navbar/openmenu.svg'
import Mobilenav from './Mobilenav'
import Auth from './Auth'
import './Navbar.css'
import { useState } from 'react'
import Webnav from './Webnav'

const Navbar = () => {
    
    const {width} = useWindowResize();
    const [menu, setMenu] = useState(true)

    const handleClick = () => {
        setMenu(prevMenu => !prevMenu)
    }

    const mobileNav = menu ? '' : ' active';
    const mobileIcon = (width <= 1024 ) ? ' mobile' : '';

    const MOBILE = (
        !menu && <div className='mobile-nav'>
            <Mobilenav />
            <Auth />
        </div> )
    const WEB = (
        <div className='nav'>
                <Webnav />
                <Auth dom='login' />
            </div> 
    )



    return (
        <div className="navbar">
            <div className={`nav-icons${mobileIcon}`}>

                <div className="logo">
                    <img src={Hernalytics} alt="Hernalytics-logo" />
                </div>

                {(width <= 1024 )? <div className="hamburger" onClick={handleClick}>
                    {menu ? <img src={openmenu} alt="openmenu" /> :  <img src={closemenu} alt="closemenu" />}
                </div> : ''}

            </div>

            <div className="menu-holder"></div>

           {width <= 1024 ? MOBILE : WEB}
        </div>
    )
}

export default Navbar