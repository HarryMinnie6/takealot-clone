import React from 'react'
import "./SearchBar.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

function SearchBar() {
    return (
        <div className='header__search-bar'>
     
            <div className='header__search-bar_wrapper'>

                <div className='header__search'>
                    <input type='text' className='header__searchInput' />  
                    <SearchIcon className='header__searchIcon'/>     
                </div>

                <div className="header__category-links-options">
                    <div className='category-link'> 
                        <Link className='link first'>Loadshedding</Link> 
                    </div>
                    <div className='category-link'> 
                        <Link className='link'>New electronics</Link> 
                    </div>
                    <div className='category-link'> 
                        <Link className='link'>Clearance store</Link>
                    </div>
                    <div className='category-link'> 
                        <Link className='link'>Fashion Outlet</Link> </div>
                    <div className='category-link'> 
                        <Link className='link'>Everyday essentials</Link> 
                    </div>
                    <div className='category-link'> 
                        <Link className='link'>Luxury Beauty offers</Link> 
                    </div>
                    <div className='category-link'> 
                        <Link className='link'>Deals and promotions</Link> 
                    </div>
                    <div className='category-link'> 
                        <Link className='link last'>Brand Stores</Link> </div>
                </div>
        
            </div> 
        </div> 
    )
}

export default SearchBar
