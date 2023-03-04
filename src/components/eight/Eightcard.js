

import './eight.css'


const Eightcard = ({eimg, ealt, worhead, werd}) => {
    return(
        <div className="Eightcard">
            <div className="eimg">
                <img src={eimg} alt={ealt} />
            </div >
            <h3>{worhead}</h3>
            <p>{werd}</p>
        </div>

    )
}


export default Eightcard