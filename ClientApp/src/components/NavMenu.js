import React, { Component } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { FaHome, FaUserAlt, FaEnvelope, FaCertificate } from 'react-icons/fa';
import { img2 } from './images/img2.png'


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }


  render () {
    return (
      <header id="#home">
        <div className="sidenav">
          <ul>

            <li><div><img style={{ height: "100", width: "120px" }}src="https://i.imgur.com/SYwYfae.jpg"/></div></li>

            <li><a tag={Link} className="text-light navbox" to="/" href="#home"><h3><FaHome /></h3>Home</a></li>
            <li><a tag={Link} className="text-light navbox" to="/About" href="#about" style={{ height: "100px" }}><h3><FaUserAlt /></h3>About</a></li>
            <li><a tag={Link} className="text-light navbox" to="/Skills" href="#skills"><h3><FaCertificate /></h3>Skills</a></li>
            <li><a tag={Link} className="text-light navbox" to="/Contact" href="#contact"><h3><FaEnvelope /></h3>Contact</a></li>
        </ul>
        </div>
        <div id="home" className="top-left">.</div>
        <div  className="centered">DANIEL XU</div>
        </header>
    );
  }
}
export default NavMenu;