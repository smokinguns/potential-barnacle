import React from 'react';

import RNavbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class Navbar extends React.Component {
    render(){
        return (
          <RNavbar bg="light" expand="lg">
          <RNavbar.Brand href="#home"></RNavbar.Brand>
          <RNavbar.Toggle aria-controls="basic-navbar-nav" />
          <RNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/getting-started">Getting Started</Nav.Link>
              <Nav.Link href="/coaches">Coaches</Nav.Link>
              <Nav.Link href="/schedule">Schedule</Nav.Link>
            </Nav>
          </RNavbar.Collapse>
          </RNavbar>
        );
    }
}

/*
<RNavbar bg="light" expand="lg">
  <RNavbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <RNavbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
*/

export {Navbar};