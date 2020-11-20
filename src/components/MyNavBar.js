import React, { Component } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class MyNavBar extends Component {

  redirectToGithub() {
    window.location.href = "https://github.com/chuong2598?tab=repositories"
  }

  changeNameColor(id) {
    var currentColor = document.getElementById(id).style.color
    currentColor = currentColor === "white" ? "Coral" : "white"
    document.getElementById(id).style.color = currentColor
  }

  chooseSection(section){
    this.props.onSelectSection(section)
  }


  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand style={{ paddingLeft: "30px" }}>
            <Button
              id="nav-bar-name"
              variant="link"
              size="sm"
              onClick = {() => this.chooseSection("home")}
              onMouseOver={() => this.changeNameColor("nav-bar-name")}
              onMouseOut={() => this.changeNameColor("nav-bar-name")}
              style={{ fontWeight: 'bold', fontSize: '24px', color: 'White', textDecoration: "none" }} >
              Hoang Chuong Nguyen
            </Button>
          </Navbar.Brand>

          <Nav className="mr-auto">
            <Button
              onClick={this.redirectToGithub} variant="link" bg="link"
              id="nav-bar-github-icon"
              onMouseOver={() => this.changeNameColor("nav-bar-github-icon")}
              onMouseOut={() => this.changeNameColor("nav-bar-github-icon")}
              style={{ color: "white" }} >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Button>
          </Nav>

          <Nav style={{ paddingRight: "30px" }}>
            <Button
              bg="link" variant="link"
              id="nav-bar-about-me"
              onClick = {() => this.chooseSection("about-me")}
              onMouseOver={() => this.changeNameColor("nav-bar-about-me")}
              onMouseOut={() => this.changeNameColor("nav-bar-about-me")}
              style={{ fontWeight: 'bold', fontSize: '18px', color: 'White', textDecoration: "none" }} >
              ABOUT ME
          </Button>

            <Button
              bg="link" variant="link"
              id="nav-bar-project"
              onClick = {() => this.chooseSection("project")}
              onMouseOver={() => this.changeNameColor("nav-bar-project")}
              onMouseOut={() => this.changeNameColor("nav-bar-project")}
              style={{ fontWeight: 'bold', fontSize: '18px', color: 'White', textDecoration: "none" }} >
              PROJECTS
          </Button>

            <Button
              bg="link" variant="link"
              id="nav-bar-contact"
              onClick = {() => this.chooseSection("contact")}
              onMouseOver={() => this.changeNameColor("nav-bar-contact")}
              onMouseOut={() => this.changeNameColor("nav-bar-contact")}
              style={{ fontWeight: 'bold', fontSize: '18px', color: 'White', textDecoration: "none" }} >
              CONTACT
          </Button>

          </Nav>

        </Navbar>
      </div>
    );
  }
}

export default MyNavBar;