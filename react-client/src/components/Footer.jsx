import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

const Footer = (props) => (
  <footer>
      <Grid>
        <Nav justified>
          <NavItem
            eventKey={1}>
            Privacy policy
          </NavItem>
          <NavItem
            eventKey={2}
            title="Item">
            Terms & Conditions
          </NavItem>
          <NavItem
            eventKey={3}>
            Contact
          </NavItem>
        </Nav>

        <div className="text-center small copyright">
          © copyright 2018 MTB Trail Finder
        </div>
      </Grid>
    </footer>
  )


export default Footer;
