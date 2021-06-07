import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Container } from 'reactstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export class Skills extends Component {
  static displayName = Skills.name;

  numberOfRepos = 0;

  constructor() {
    super()
    this.state = {
      numberOfRepos: 0
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/cropwell/repos')
      .then(response => response.json())
      .then(json => {
        this.setState({
          numberOfRepos: json.length
        })
      });
  }

  render() {
    return (

      <Container className="col-10">
    <div id="skills">
      <div>

              <h3>My Skills </h3>
              <h5>Current educational plan</h5>

        
         
            </div>


              
                <Container>
              <Row xs={2} >   
        
                    <Col className="col-6 list-group-item ">Courses</Col>
                    <Col className="col-2 list-group-item ">Finished</Col>

                    <Col className="list-group-item list-group-item-success">Introduction to System Development</Col>
                <Col className="col-2 list-group-item list-group-item-success">2020-09-04</Col>

                    <Col className="list-group-item list-group-item-success">Introduction to Object-orientation</Col>
                <Col className="col-2 list-group-item list-group-item-success">2020-10-02</Col>

                    <Col className="list-group-item list-group-item-success">Object-oriented Programming, basic</Col>
                <Col className="col-2 list-group-item list-group-item-success">2021-01-08</Col>

                    <Col className="list-group-item list-group-item-success">Object-oriented Analysis</Col>
                <Col className="col-2 ist-group-item list-group-item-success">2021-02-05</Col>

                    <Col className="list-group-item list-group-item-success">Object-oriented Design</Col>
                <Col className="col-2 list-group-item list-group-item-success">2021-03-05</Col>

                    <Col className="list-group-item list-group-item-success">Databases</Col>
              <Col className="col-2 list-group-item list-group-item-success">2021-04-16</Col>

                    <Col className="list-group-item list-group-item-light">Web Applications</Col>
                <Col className="col-2 list-group-item list-group-item-light">2021-06-11</Col>

                    <Col className="list-group-item list-group-item-light">Agile Project Management</Col>
                <Col className="col-2 list-group-item list-group-item-light">2021-09-03</Col>

                    <Col className="list-group-item list-group-item-light">LIA 1 - Learning in a work environment</Col>
                <Col className="col-2 list-group-item list-group-item-light">2021-10-29</Col>

                    <Col className="list-group-item list-group-item-light">Object-oriented Programming, advanced</Col>
                <Col className="col-2 list-group-item list-group-item-light">2022-02-18</Col>

                    <Col className="list-group-item list-group-item-light">LIA 2 - Learning in a work environment</Col>
                <Col className="col-2 list-group-item list-group-item-light">2022-05-27</Col>

                    <Col className="list-group-item list-group-item-light">Master Thesis</Col>
                <Col className="col-2 list-group-item list-group-item-light">2022-06-10</Col>

                  </Row>
                  </Container>

            
           
          </div>
           <div >
              <h1><a href="https://github.com/cropwell"><FaGithub /></a></h1>
              <p>Number of repos in my github right now: {this.state.numberOfRepos}</p>
            </div>
            
          
      </Container>

    );
  }
}

export default Skills;