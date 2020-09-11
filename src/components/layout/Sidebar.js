import React from 'react'
import {Link} from 'react-router-dom'
import { bool } from 'prop-types';
import { StyledMenu } from '../style/Sidebar.styled';



const Sidebar = ({ open, ...props }) => {

    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
return (


    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
    <Link to="/">My Dashboard</Link><br /><br />
        <Link to="/compose">Compose</Link><br /><br />
        <Link to="/subscribers">Subscribers</Link><br /><br />
        <Link to="/drafts">Drafts</Link><br /><br />
        <Link to="/sentmail">Sent Mail</Link><br /><br />
      </StyledMenu>

)
}


    Sidebar.propTypes = {
        open: bool.isRequired,
      }


export default Sidebar


