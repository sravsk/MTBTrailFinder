import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

const StickyHeader = (props) => {
  return (
  <Navbar className="header-top-container ">
     <Navbar.Header>
          <Navbar.Brand>
            <a href="/" className="navbar-brand-custom">
              MTB Trail Finder
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              href="#">
              Search
            </NavItem>
            <NavItem
              eventKey={2}
              href="#">
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default StickyHeader;