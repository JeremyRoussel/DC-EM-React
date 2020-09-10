import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
return (
    <>

        <div className="d-flex flex-column justify-content-center m-3 sidebar">
            <Link to="/">My Dashboard</Link><br /><br />
            <Link to="/compose">Compose</Link><br /><br />
            <Link to="/subscribers">Subscribers</Link><br /><br />
            <Link to="/drafts">Drafts</Link><br /><br />
            <Link to="/sentmail">Sent Mail</Link><br /><br />
        </div>
    </>
)
}

export default Sidebar
