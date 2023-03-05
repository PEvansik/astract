
import useWindowResize from '../../hooks/useWindowResize'
import Hernalytics from '../asset/navbar/Hernalytics.svg'
import closemenu from '../asset/navbar/closemenu.svg'
import openmenu from '../asset/navbar/openmenu.svg'
import Mobilenav from './Mobilenav'
import Auth from './Auth'
import './Navbar.css'



const Navbar = ({menuController, handleClick}) => {
    
    const {width} = useWindowResize();

    const mobileIcon = (width <= 771 ) ? ' mobile' : '';

    

    const MOBILE = (
        (width <= 771 ) 
        ?   (!menuController && <div className={`mobile-nav ${!menuController ? 'active' : ''}`} >
                <Mobilenav />
                <Auth dom='login' />
            </div> )
        : ( <div className={`mobile-nav ${!menuController ? 'active' : ''}`} >
                <Mobilenav />
                <Auth dom='login'/>
        </div>))




    return (
        <div className="navbar">
            <div className={`nav-icons${mobileIcon}`}>

                <div className="logo">
                    <img src={Hernalytics} alt="Hernalytics-logo" />
                </div>

                {(width <= 771 )? <div className="hamburger" onClick={handleClick}>
                    {menuController ? <img src={openmenu} alt="openmenu" /> :  <img src={closemenu} alt="closemenu" />}
                </div> : ''}

            </div>

            {/* {!menu && <div className="overlay"></div>} */}

           { MOBILE }
        </div>
    )
}

export default Navbar