import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import * as routs from '../../config/routes';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar className="bg-dark navbar-expand-sm" dark>
          <NavbarBrand tag={Link} to={routs.LANDING} className="mr-auto">Home Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to={routs.PROFILE}>Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={routs.HOME}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={routs.LOGIN}>Log in</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;