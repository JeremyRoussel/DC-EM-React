import React, {useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import { bool } from 'prop-types';
import { StyledMenu } from '../style/Sidebar.styled';




const Sidebar = ({ open, setOpen, ...props }) => {
    
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
return (


    <StyledMenu open={open} aria-hidden={!isHidden} {...props} className="thing">

    <Link to="/dashboard" onClick={() => setOpen(!open)} {...props}>My Dashboard</Link><br /><br />
        <Link to="/compose" onClick={() => setOpen(!open)} {...props}>Compose</Link><br /><br />
        <Link to="/subscribers" onClick={() => setOpen(!open)} {...props}>Subscribers</Link><br /><br />
        <Link to="/drafts" onClick={() => setOpen(!open)} {...props}>Drafts</Link><br /><br />
        <Link to="/sentmail" onClick={() => setOpen(!open)} {...props}>Sent Mail</Link><br /><br />

      </StyledMenu>

)
}


    Sidebar.propTypes = {
        open: bool.isRequired,
      }


export default Sidebar


