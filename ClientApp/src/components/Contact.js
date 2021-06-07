import React, { Component } from 'react';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

export class Contact extends Component {
  static displayName = Contact.name;


  render() {
    return (
      
      <Container className="col-10">
      <div id="contact">
       
                       

             

        <h1 className="centered">
          <Link to={{ pathname: "https://www.linkedin.com/in/daniel-xu-9935101b9/" }} target="_blank" />
          <a href="https://www.linkedin.com/in/daniel-xu-9935101b9/"><FaLinkedinIn /></a>
          <a href="mailto:daniel23xu@hotmail.com"><FaEnvelope /></a>
         </h1>


          </div>
          
      </Container >

    );
  }
}

export default Contact;