

import bottom from '../asset/eight/bottom.svg'
import description from '../asset/eight/description.svg'
import join from '../asset/eight/join.svg'
import member from '../asset/eight/member.svg'
import top from '../asset/eight/top.svg'
import Eightcard from './Eightcard'


const Eight = () => {
    return(
        <div 
            className="Eight"
            style={
                {                
                backgroundImage: `url(${top}), url(${bottom})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `100% 0%, 0% 100%`,
               }
            }>
                <div className="eightcon">
                    <h2>Join Community</h2>
                    <div className="conhol">
                        <Eightcard
                            eimg={join}
                            ealt='join-icon'
                            worhead='Sign up to join the community'
                            werd=' Join a community of determined women? Sign Up Now.' />
                        <Eightcard
                            eimg={description}
                            ealt='description'
                            worhead='Add a description'
                            werd='Tell us about yourself, we would love to hear about you and what you do.' />
                        <Eightcard
                            eimg={member}
                            ealt='member-icon'
                            worhead='You’re now a member!'
                            werd='Voila, now you can access all events, job opportunities and trainings.' />
                    </div>

                </div>
                
            </div>
    )
}


export default Eight
