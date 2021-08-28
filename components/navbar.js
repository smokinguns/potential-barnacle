import React from 'react';

import RNavbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class Navbar extends React.Component {
    render(){
        return (
          <RNavbar bg="light" expand="lg">
          <RNavbar.Brand href="#home"></RNavbar.Brand>
          <RNavbar.Toggle aria-controls="basic-navbar-nav" />
          <RNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/coaches">Coaches</Nav.Link>
              <Nav.Link href="/schedule#schedule">Schedule</Nav.Link>
              <Nav.Link href="/photos">Photos</Nav.Link>
              
            </Nav>
          </RNavbar.Collapse>
          </RNavbar>
        );
    }
}


export {Navbar};