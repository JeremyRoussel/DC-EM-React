import React from 'react'

import {Link} from 'react-router-dom'

export default () => {
    return (
        <div className="m-5">
            Welcome Page
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signout">Sign Out</Link>

        </div>
    )
}