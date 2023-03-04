

import Hernalytics from '../asset/footer/Hernalytics.svg'
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
                    <img src={Hernalytics} alt="hernalytics" />
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
                        <p className="bout">About</p>
                        <p className="story">Our Story</p>
                        <p className="bouther">About Hernalytics</p>
                        <p className="video">Videos</p>
                    </div>

                    <div className="support">
                        <p className="supp">Support</p>
                        <p className="faq">FAQs</p>
                        <p className="policy">Privacy Policy</p>
                        <p className="terms">Terms & Conditions</p>
                    </div>
                </div>

                <div className="condition">
                    <p>Privacy policy</p>
                    <p>Terms and conditions</p>
                </div>
                
            </div>

        </div>
    )
}


export default Footer