import React from 'react'

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

function Navbar(props){
    return(
        <div className='navbar'>
            <img src={props.icon} />
            <hr className="navbar-divider"></hr>
        </div>
    )
}
export default Navbar