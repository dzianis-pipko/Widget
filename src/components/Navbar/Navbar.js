import React from 'react';
import './Navbar.scss';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export const Navbars = () => {
   return (
      <Navbar bg="light" expand="lg">
         <div className="container">
            <Navbar.Brand href="#home">Widget</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <NavLink className="nav-link" exact to="/">Home</NavLink>
                  <NavLink className="nav-link" to="/products">Products</NavLink>
               </Nav>
               <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
               </Form>
            </Navbar.Collapse>
         </div>
      </Navbar>
   )
}