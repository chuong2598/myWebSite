import React, { Component } from 'react';
import './css/custom-navbar.css'
import MyNavBar from './components/MyNavBar'
import Info from './components/Info'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import { Button } from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props)
    this.myRef = React.createRef()  
  }

navigateSection = (section) => {
  section = document.getElementById(section)
  console.log(section)
  if (section != null){
    section.scrollIntoView({behavior: 'smooth'})
  }
  else {
    alert("Have not implemented :)")
  }
}



  render() {
    return (
      <div id = "home">
        <MyNavBar onSelectSection = {this.navigateSection}/>
        <Info/>
        <div id = "about-me" ref="">
          <AboutMe />
        </div>
        <div id = "project">
          <Project ref={this.myRef} />
        </div>
      </div>
    );
  }
}

export default App;