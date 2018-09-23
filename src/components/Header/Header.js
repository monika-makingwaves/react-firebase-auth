import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import * as routs from '../../config/routes';
import SignOut from "../SignOut/SignOut";
import { connect } from 'react-redux';

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

  renderAuthMenu = () => {
    return (
      <Nav navbar>
        <NavItem>
          <NavLink tag={Link} to={routs.PROFILE}>Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={routs.HOME}>Home</NavLink>
        </NavItem>
        <NavItem>
          <SignOut>Sign out</SignOut>
        </NavItem>
      </Nav>
    );
  };

  renderNonAuthMenu = () => {
    return (
      <Nav navbar>
        <NavItem>
          <NavLink tag={Link} to={routs.LOGIN}>Log in</NavLink>
        </NavItem>
        <Nav navbar>
          <NavItem>
            <NavLink tag={Link} to={routs.SIGN_UP}>Sign up</NavLink>
          </NavItem>
        </Nav>
      </Nav>
    );
  };

  render() {
    const {user} = this.props;
    return (
      <div>
        <Navbar className="bg-dark navbar-expand-sm" dark>
          <NavbarBrand tag={Link} to={routs.LANDING} className="mr-auto">Home Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            {user !== null ? this.renderAuthMenu() : this.renderNonAuthMenu() }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Header);