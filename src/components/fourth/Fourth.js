
import { useState } from 'react'
import useWindowResize from '../../hooks/useWindowResize'
import './fourth.css'
import news1 from '../asset/fourth/news1.jpeg'
import news2 from '../asset/fourth/news2.jpeg'
import news3 from '../asset/fourth/news3.jpeg'
import news4 from '../asset/fourth/news4.jpeg'
import FourthCard from './Fourthcard'



const Fourth = () => {
    const [more, setMore] = useState(false)


    const {width} = useWindowResize();

    const handleClick = () => {
        setMore(prev => !prev)
    }



    return (
        <div className="Fourth">
            <h3>In the news</h3>
            <div className="cardholder">

                {/* you can use width to controll what happens here */}

                <FourthCard 
                    newspic={news1}
                    alt='news1'
                    channel='News Channel'
                    bulletin='Consectetur arcu tellus massa mi volutpat pharetra arcu.'
                    date='Dec 12, 2022'/>

               {width > 760 ?(<div className='see'>
                        <FourthCard 
                            newspic={news2}
                            alt='news1'
                            channel='News Channel'
                            bulletin='Consectetur arcu tellus massa mi volutpat pharetra arcu.'
                            date='Dec 12, 2022'/>
                        <FourthCard 
                            newspic={news3}
                            alt='news1'
                            channel='News Channel'
                            bulletin='Consectetur arcu tellus massa mi volutpat pharetra arcu.'
                            date='Dec 12, 2022'/>
                        <FourthCard 
                            newspic={news4}
                            alt='news1'
                            channel='News Channel'
                            bulletin='Consectetur arcu tellus massa mi volutpat pharetra arcu.'
                            date='Dec 12, 2022'/>

                    </div>)


                
                   : (more && <div className='see'>
                        <FourthCard 
                            newspic={news2}
                            alt='news1'
                            channel='News Channel'
                            bulletin='Consectetur arcu tellus massa mi volutpat pharetra arcu.'
                            date='Dec 12, 2022'/>
                        <FourthCard 
                            newspic={news3}
                            alt='news1'
                            channel='News Channel'
                            bulletin='Consectetur arcu tellus massa mi volutpat pharetra arcu.'
                            date='Dec 12, 2022'/>
                        <FourthCard 
                            newspic={news4}
                            alt='news1'
                            channel='News Channel'
                            bulletin='Consectetur arcu tellus massa mi volutpat pharetra arcu.'
                            date='Dec 12, 2022'/>

                    </div>)}
            </div>

            {width < 761 && <div className='seemore'>
                <button onClick={handleClick}>{!more ? 'See more stories' : 'See less stories'}</button>
            </div>}
        </div>
    )
}

export default Fourth