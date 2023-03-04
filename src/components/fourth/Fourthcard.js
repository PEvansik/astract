

import './fourth.css'
import launch from '../asset/fourth/launch.svg'


const FourthCard = ({newspic, alt, date, channel, bulletin}) => {
    return(
        <div className="fourthcard">
            <div 
                className="newimg" 
                style={{
                    backgroundRepeat: 'no-repeat',
                    background: `url(${newspic})`,
                    backgroundPosition: '50% 60%',
                    }}>
                {/* <img src={newspic} alt={alt} /> */}
            </div>
            <div className="news">
                <p className="channel">{channel}</p>
                <p className="bulletin">{bulletin}</p>
                <div className="datelink">
                    <p className="date">{date}</p>
                    <p className="visit">
                        <p>Visit</p>
                        <div className="visitlink">
                            <img src={launch} alt="launch-icon" />
                        </div>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default FourthCard
