import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class About extends Component {
  static displayName = About.name;


  render() {
    return (
      <Container className="col-10">




          <div className="About" href="#about" id="about">
            <h3>About </h3>
            <div className="container">
              <div className="row">
                <div className="col-md">Aspiring software developer
            <p>
                    Currently enrolled in a Higher Vocational Education program</p>
                
                  Base: Gothenburg, Sweden
                  </div>
                <div>
                  </div>
                <div className="col-md">  <img style={{ height: "190px", width: "270px" }}src="https://i.imgur.com/SYwYfae.jpg" alt="profile" />     </div>
                
              </div>
            </div>
          </div>
           
            
        </Container>
      );
    }
  }

  export default About;