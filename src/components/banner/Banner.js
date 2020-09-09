import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner__wrapper'>

            <div className="banner__advertising"> 
                <div className='banner__adCarousels'>
                    <div className='banner__carouselOne'> 
                        <img className="img__carouselOne" src={require('./ad1.png')} alt='logo'/>
                    </div>
                    <div className='banner__carouselTwo'>
                        <h2 className='banner__header'>Featured Brands</h2>
                        <img className="img__carouselOne" src={require('./ad8.png')} alt='logo'/>
                    </div>
                </div>
                <div className='banner__adBlocks'>
                    
                    <div className='banner__addBlockOne'>
                        <img className="img__addBlockOne" src={require('./ad7.png')} alt='logo'/>
                    </div>
                    <div className='banner__addBlockTwo'> 
                        <img className="img__addBlockOne" src={require('./ad3.png')} alt='logo'/>
                    </div>
                </div>
            </div>
    
        </div>
    )
}

export default Banner
