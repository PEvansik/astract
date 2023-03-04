
import candidate1 from '../asset/fifth/candidate1.jpeg'
import candidate2 from '../asset/fifth/candidate2.jpeg'
import candidate3 from '../asset/fifth/candidate3.jpeg'
import candidate4 from '../asset/fifth/candidate4.jpeg'
import candidate5 from '../asset/fifth/candidate5.jpeg'
import bottomleft from '../asset/fifth/bottomleft.svg'
import topright from '../asset/fifth/topright.svg'
import Fifthcard from './fifthcard'
import './fifth.css'

const Fifth = () => {
    return(
        <div 
            className="Fifth"
            style={
                {    
                    backgroundImage: `url(${topright}), url(${bottomleft})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '100% 0%, 0% 93%'
                }
            }>
            <div className='cands'>
                <h5>Candidates</h5>
                <p>Get to know our running candidates</p>
            </div>
            <div className="cancard">
                <Fifthcard 
                    candidate={candidate1}
                    x={50}
                    y={30}/>
                <Fifthcard 
                    candidate={candidate2}
                    x={50}
                    y={10}/>
                <Fifthcard 
                    candidate={candidate3}
                    x={60}
                    y={10}/>
                <Fifthcard 
                    candidate={candidate4}
                    x={50}
                    y={52}/>
                <Fifthcard 
                    candidate={candidate5}
                    x={50}
                    y={50}/>
            </div>
            <p className="all-candid"><a href="/#">See all candidate</a></p>
        </div>
    )
}

export default Fifth