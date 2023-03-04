

import Hernalytic from '../asset/footer/Hernalytic.svg'
import instagramm from '../asset/footer/instagramm.svg'
import twitter from '../asset/footer/twitter.svg'
import watsapp from '../asset/footer/watsapp.svg'

import './footer.css'


const Footer = () => {
    return(
        <div className="footer">
            {/* address */}
            <div className="addr">
                <div className="logo">
                    <img src={Hernalytic} alt="hernalytics" />
                </div>

                <div className="socials">
                    <a href="/#"><img src={instagramm} alt="instagram" className="insta" /></a>
                    <a href="/#"><img src={twitter} alt="twitter" className="twitter" /></a>
                    <a href="/#"><img src={watsapp} alt="watsapp" className="whatsapp" /></a>
                </div>

                <div className="contact">
                    <p className='locate'>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria</p>
                    <p className='mail'>hernalytics@gmail.com</p>
                    <p className='phone'>+234 801 234 5678</p>
                    <p className='copy'>© 2022 Hernalytics</p>
                </div>

            </div>

            {/* links */}
            <div className="links">

                <div className="boutsupport">
                    <div className="about">
                        <p className="bout"><a href='/#'>About</a> </p>
                        <p className="story"><a href='/#'>Our Story</a> </p>
                        <p className="bouther"><a href='/#'>About Hernalytics</a> </p>
                        <p className="video"><a href='/#'>Videos</a> </p>
                    </div>

                    <div className="support">
                        <p className="supp"><a href='/#'> Support</a></p>
                        <p className="faq"><a href='/#'> FAQs</a></p>
                        <p className="policy"><a href='/#'>Privacy Policy</a> </p>
                        <p className="terms"><a href='/#'>Terms & Conditions</a> </p>
                    </div>
                </div>

                <div className="condition">
                    <p><a href='/#'> Privacy policy</a></p>
                    <p><a href='/#'>Terms and conditions</a></p>
                </div>
                
            </div>

        </div>
    )
}


export default Footer