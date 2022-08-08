import React from 'react'
import HomeIcon from "../assets/HomeIcon.png"
import SearchIcon from "../assets/SearchIcon.png"
import LibraryIcon from "../assets/LibraryIcon.png"

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
            <ul className='links'>
                <li>
                    <img src={HomeIcon} className="navbar--icons" />
                </li>
                <li>
                    <h4 className='icon--text'>Home</h4>
                </li>

                <li>
                    <img src={SearchIcon} className="navbar--icons" />
                </li>
                <li>
                    <h4 className='icon--text'>Search</h4>
                </li>

                <li>
                    <img src={LibraryIcon} className="navbar--icons" />
                    
                </li>
                <li>
                    <h4 className='icon--text'>Library</h4>
                </li>
            </ul>
            <hr className="navbar-divider"></hr>
        </div>
    )
}
export default Navbar