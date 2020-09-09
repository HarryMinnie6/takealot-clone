import React from 'react'
import './Home.css'
import Product from '../product/Product'

function Home() {
    return (
        <div className='home__wrapper'>
        
        <div className='home__divs'>
        <div className='products-display1'>
            <div className='home1'>
                <h2 className='home__h2'>Kit Out Your Home Office </h2>
                <div className='home__row'>
                    <Product 
                    id= '1'
                    title='NB North Bayou Double Extension Swivel Monitor Mount for 22-35 Inch Screens'
                    price={12.00}
                    rating={4.4}
                    image= {<img src={require('./prod1.png')} alt=''/>}
                    discount= {20}
                    />
                    <Product 
                    id= '2'
                    title='NB North Bayou Single Arm Adjustable Monitor Desk Mount Stand'
                    price={12.00}
                    rating={3.8}
                    image= {<img src={require('./prod2.png')} alt=''/>}
                    discount= {50}
                    />
                    <Product 
                    id= '3'
                    title='NB North Bayou Dual Arm Adjustable Monitor Desk Mount Stand'
                    price={12.00}
                    rating={4.1}
                    image= {<img src={require('./prod3.png')} alt=''/>}
                    discount= {10}
                    />
                </div>    
            </div>
            <div className='home2'>
                <h2 className='home__h2'>Explore Nivea's Perfect & Radiant Range </h2>
                <div className='home__row'>
                    <Product 
                    id= '4'
                    title='NIVEA Perfect & Radiant Sensitive Night Cream - 50ml'
                    price={12.00}
                    rating={4.4}
                    image= {<img src={require('./prod4.png')} alt=''/>}
                    discount= {12}
                    />
                    <Product 
                    id= '5'
                    title='NIVEA Perfect & Radiant Even Tone Day Cream SPF15 - 50ml'
                    price={12.00}
                    rating={4.2}
                    image= {<img src={require('./prod5.png')} alt=''/>}
                    discount= {2.2}
                    />
                    <Product 
                    id= '6'
                    title='NIVEA Perfect & Radiant Sensitive Day Cream SPF15 - 50ml'
                    price={12.00}
                    rating={3}
                    image= {<img src={require('./prod6.png')} alt=''/>}
                    discount= {4}
                    />
                </div>    
            </div>
            <div className='home2'>
                <h2 className='home__h2'>Explore Lifestyle & Co </h2>
                <div className='home__row'>
                    <Product 
                    id= '7'
                    title='Handy Silicone Bathroom Mirror/Shower Utensil Holder'
                    price={12.00}
                    rating={4.4}
                    image= {<img src={require('./prod7.png')} alt=''/>}
                    discount= {3}
                    />
                    <Product 
                    id= '8'
                    title='3-in-1 Hair Dryer, Volumiser & Styler with Ceramic Heater'
                    price={12.00}
                    rating={4.2}
                    image= {<img src={require('./prod8.png')} alt=''/>}
                    discount= {8}
                    />
                    <Product 
                    id= '9'
                    title='Lifestyle Multi-Panel Styled Headboard - Queen'
                    price={12.00}
                    rating={3}
                    image= {<img src={require('./prod9.png')} alt=''/>}
                    discount= {12}
                    />
                </div>    
            </div>
        </div>
            
            <div className='banner__adBlocks'>
                    
                    <div className='banner__addBlockOne'>
                        <img className="img__addBlockOne" src={require('./ad4.png')} alt='logo'/>
                    </div>
                    <div className='banner__addBlockTwo'> 
                        <img className="img__addBlockOne" src={require('./ad5.png')} alt='logo'/>
                    </div>
                    <div className='banner__addBlockTwo'> 
                        <img className="img__addBlockOne" src={require('./ad6.png')} alt='logo'/>
                    </div>
                    <div className='banner__addBlockTwo'> 
                        <img className="img__addBlockOne" src={require('./ad2.png')} alt='logo'/>
                    </div>
                </div>
        
        </div>
        </div>
    )
}

export default Home

