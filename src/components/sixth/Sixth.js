

import Sixthcard from "./Sixthcard"


const Sixth = () => {
    return(
        <div className="Sixth">
            <h2>Trending Discussion</h2>
            <div className="sixholder">
                <Sixthcard />
                <Sixthcard />
            </div>
            <p className="all-trend"><a href="/#">See more</a></p>
        </div>
    )
}

export default Sixth