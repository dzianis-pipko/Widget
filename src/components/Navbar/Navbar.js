import React from 'react';
import './Navbar.scss';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const Navbars = () => {
   return (
      <Navbar bg="light" expand="lg">
         <div className="container">
            <Navbar.Brand href="#home">Widget</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Products</Nav.Link>
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