

import './nine.css'
import nine from '../asset/nine/nine.jpeg'

const Nineth = () => {
    return (
        <div 
            className="Nineth"
            // style={{
            //     backgroundSize: 'cover',
            //     backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5)), url(${nine})`,
            //     backgroundRepeat: 'no-repeat',
            //     backgroundPosition: `50% 50%,`,
            //    }}
            >
            <div className="ninecard">
                <h2>Subscribe to our newsletter</h2>
                <p>Join a community of great-minded women. Be the first to know about important events. </p>
            </div>
            <div className='letter'>
                <label htmlFor="letter">Email Address *</label>
                <div className="inplet">
                    <input type="text" id='letter' placeholder='Email Address' />
                </div>
            </div>
            <div className="letterbtn">
                <button>Subscribe Now</button>
            </div>
        </div>
    )
}

export default Nineth