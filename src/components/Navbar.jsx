import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  var styledNavbar = {
    display: 'flex',
    // backgroundColor: 'lightblue',
    paddingTop: '10px',
    paddingBottom: '50px',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'lightgrey',
    height: '200px',
    padding: '0',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    // textShadow: '0px 0px 20px black',
    borderBottom: '5px black solid'
  };
  var styledHeader = {
    fontSize: '40px',
    paddingBottom: '0',
    marginBottom: '10px',
    fontFamily: 'georgia',
    fontStyle: 'italic',
    color: 'grey'
  };
  var styledLink = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
    fontFamily: 'helvetica',
    fontWeight: '100',
    color: 'forestgreen'
    // textShadow: '0px 0px 20px black',
  };
  return (
    <div style={styledNavbar}>
      <h1 style={styledHeader}>DispHatcher</h1>
      <span>
        <Link style={styledLink} to="/">dispatcher</Link> | <Link style={styledLink} to="/job-builder">job builder</Link> | <Link style={styledLink} to="/admin">profiles</Link>
      </span>
    </div>
  );
}

export default Navbar;
