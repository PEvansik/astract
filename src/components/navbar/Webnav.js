
import './Navbar.css'

const Webnav = () => {
    return (
        <div className="web-nav">
            <div className='nav-items-web'>
                <p>about us</p>
                <p>
                    <select>
                        <option value="0">our communities</option>
                        <option value="1">Nigeria</option>
                        <option value="2">Cameroun</option>
                        <option value="3">Gambia</option>
                    </select>
                </p>
                <p>
                    <select>
                        <option value="0">election data</option>
                        <option value="1">Nigeria</option>
                        <option value="2">Cameroun</option>
                        <option value="3">Gambia</option>
                    </select>
                </p>
                <p>e-buddy</p>
                <p>veo platform</p>
            </div>
        </div>
    )
}


export default Webnav