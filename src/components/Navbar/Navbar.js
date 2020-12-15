import React from 'react';
import './Navbar.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { Search } from '../Search/Search';

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
               <Search />
            </Navbar.Collapse>
         </div>
      </Navbar>
   )
}