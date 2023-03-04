
import './third.css'


const Thirdcarousel = ({carhead, carlearn, design})  => {
    return (
        <div 
            className="carouselimg" 
            style={
                {
                display: "flex",
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingInline: '26px',
                gap: '28px',
                width: '240px',
                height: '198px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover',
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${design})`,
                borderRadius: '6px'
                }
            }>
            <div className='cartext'>
                <h6>Become a member</h6>
                <h4>{carhead}</h4>
            </div>
            <p><button>{carlearn}</button></p>
            
        </div>
    )
}


export default Thirdcarousel