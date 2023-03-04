
import './second.css'


const Process = ({secimg, sechead, secpar, secalt}) => {
    return (
        <div className="process">
            <div className='secimage'>
                <img src={secimg} alt={secalt} />
            </div>
            <div className="secdesc">
                <h4>{sechead}</h4>
                <p>{secpar}</p>
            </div>
        </div>
    )
}


export default Process