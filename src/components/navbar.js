import React from 'react';
import { Navbar, NavDropdown, Button,
    Nav, Form, FormControl
} from 'react-bootstrap';

import {BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

export function NavbarComponent(){
    return(
        <Navbar fixed="top" bg="light" expand="lg">
            <Navbar.Brand ><Link to="/home"><img style={{marginRight:"50px",}} width="150px" src="img/logo-crop.jpg"/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link style={{marginRight:"50px",fontWeight:"bold",textDecoration:"none"}}><Link to="/home">HOME</Link></Nav.Link>
                <Nav.Link style={{marginRight:"50px",fontWeight:"bold",textDecoration:"none"}}><Link to="/products">PRODUCTS</Link></Nav.Link>
                <Nav.Link style={{marginRight:"50px",fontWeight:"bold",textDecoration:"none"}}><Link to="/about">ABOUT</Link></Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
    )
}