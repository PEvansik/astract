

import arr from '../asset/fifth/arr.svg'

const Fifthcard = ({candidate, x, y}) => {
    return (
        <div className="Fifthcard">
            <div className='canholder'>
                <div 
                    className="canimg"
                    style={{
                        padding:'10px',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        background: `url(${candidate})`,
                        backgroundPosition: `${x}% ${y}%`,
                        }}>
                </div>
            </div>

            <div className="namepos">
                <h3>Name of Candidate</h3>
                <p>Position</p>
            </div>
            <a href='/#' className='lemo'><span>Learn more</span><img src={arr}/></a>
        </div>
    )
}


export default Fifthcard