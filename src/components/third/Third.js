
import './third.css'
import Thirdcarousel from "./Thirdcarousel"
import one from '../asset/third/one.jpeg'
import two from '../asset/third/two.jpeg'
import arrow from '../asset/third/arrow.svg'



const Third = () => {
    return(
        <div className="Third">
            <div>
                <h5>Communities</h5>
                <p>At amet ultrices volutpat neque faucibus pharetra.</p>
            </div>

            <div className="thirdcarousel">
                <Thirdcarousel 
                    carhead='Massa vel tortor pharetra at fermentum porttitor sed eget. '
                    carlearn='learn more'
                    design={one}/>
                <Thirdcarousel 
                    carhead='Massa vel tortor pharetra at fermentum porttitor sed eget. '
                    carlearn='learn more'
                    design={two}/>
                <Thirdcarousel 
                    carhead='Massa vel tortor pharetra at fermentum porttitor sed eget. '
                    carlearn='learn more'
                    design={one}/>
                <Thirdcarousel 
                    carhead='Massa vel tortor pharetra at fermentum porttitor sed eget. '
                    carlearn='learn more'
                    design={two}/>
                <Thirdcarousel 
                    carhead='Massa vel tortor pharetra at fermentum porttitor sed eget. '
                    carlearn='learn more'
                    design={one}/>
            </div>
            <div className="lastrow">
                <span className='community'>Over 100 Communities</span>
                <div className='arrow'>
                    <img src={arrow} alt="arrow-icon" />
                </div>
                <span className='view'><a href='/#'>View More</a></span>
            </div>
        </div>
    )
}

export default Third