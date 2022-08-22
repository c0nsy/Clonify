import React from 'react'
import HomeIcon from "/src/assets/navbarIcons/HomeIcon.png"
import LibraryIcon from "/src/assets/navbarIcons/LibraryIcon.png"
import SearchIcon from "/src/assets/navbarIcons/SearchIcon.png"

/* 
    TO DO
    
    -add anchors to icons
    -add anchors to search items (home search library)
    -develop routing
        -home
        -search
        -library
        -clicking cloneify logo or title routes to main page
    -add delete button at the bottom of nav bar so that when clicked it removes the most recent item added to playlist

*/

function Navbar(){
    return(
        <div className='navbar'>
            <div className="navbar--links">
                <img src={HomeIcon} className="home--icon"/>
                <h1>Home</h1>
                <img src={SearchIcon} className="home--icon"/>
                <h1>Search</h1>
                <img src={LibraryIcon} className="home--icon"/>
                <h1>Library</h1>
                <hr className="navbar-divider"></hr>
            </div>
            
        </div>
    )
}
export default Navbar