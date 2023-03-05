

import './seventh.css'
import vid from '../asset/seventh/vid.png'
import back from '../asset/seventh/back.svg'
import botleft from '../asset/seventh/botleft.svg'
import topright from '../asset/seventh/topright.svg'
import Play from '../asset/seventh/Play.svg'


const Seventh = () => {
    return(
        <div 
            className="Seventh"
            style={{
                paddingBottom: '54px',
                background: `url(${back}), url(${botleft}),  url(${topright})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `2% 64%, 1.8% 86.5%, 98% 45.8%`,
               }}>
            <div className="sevencont">
                <div className='seven-com'>
                    <h5>Communities</h5>
                    <p>How to Join the Biggest Civic Tech Platform In Africa</p>
                </div>
                <div className="media">
                    <div className="med"></div>
                    <div className="mediaback">
                        <div className="mediapic">
                            <img src={vid} alt="vid" />
                        </div>

                        <div className="play">
                            <img src={Play} alt="play-button" />
                        </div>    

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Seventh