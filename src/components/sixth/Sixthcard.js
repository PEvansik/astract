

import eye from '../asset/sixth/eye.svg'
import chat from '../asset/sixth/chat.svg'
import favorite from '../asset/sixth/favorite.svg'
import trend from '../asset/sixth/trend.jpg'
import './sixth.css'

const Sixthcard = () => {
    return(
        <div className="sixthcard">
            <div className="trend-img">
                    <img src={trend} alt="trend" />
                </div>
            <div className="post">
                <div className='post-child'>

                    <div className="discuss">
                        <h4>title of discussion</h4>
                        <p>Eget ac laoreet ullamcorper enim. Eget amet molestie id nisi lectus mattis facilisis.</p>
                    </div>

                    <div className="socialssix">
                        <div className="social-icons">
                            <div className="eye">
                                <img src={eye} alt="visibility" />
                                <span>102</span>
                            </div>
                            <div className="heart">
                                <img src={favorite} alt="favorite" />
                                <span>85</span>
                            </div>
                            <div className="chat">
                                <img src={chat} alt="chat" />
                                <span>85</span>
                            </div>
                        </div>

                        <div className="commentshol">
                            <a href="/#" className='comlink'>Add your comment</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sixthcard