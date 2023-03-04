

import './seventh.css'
import vid from '../asset/seventh/vid.png'
import back from '../asset/seventh/back.svg'
import botleft from '../asset/seventh/botleft.svg'
import topright from '../asset/seventh/topright.svg'
import Play from '../asset/seventh/Play.svg'


const Seventh = () => {
    return(
        <div className="Seventh">
            <div className="sevencont">
                <div className='seven-com'>
                    <h5>Communities</h5>
                    <p>How to Join the Biggest Civic Tech Platform In Africa</p>
                </div>
                <div className="media">
                    <div 
                        className="med"
                        style={{
                            // padding:'10px',
                            // backgroundRepeat: 'no-repeat',
                            // backgroundSize: '100px',
                            // background: `url(${vid})`,
                            // backgroundPosition: `52% 50%`,
                            }}>
                        <div className="mediaback">
                            <div className="mediapic">
                                <img src={vid} alt="vid" />
                            </div>
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