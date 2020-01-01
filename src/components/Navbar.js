import React, { createRef } from "react";
import { Menu, Sticky, Button, Icon, Ref} from "semantic-ui-react"; 
// import { Link, } from "react-router-dom"; 
import styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import background from "../images/13853-gradient.jpg";
import "../App.css";


class Navbar extends React.Component {

  contextRef = createRef(); 

  state = { show: true, scrollPos: 0 }
 
  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
  }


  render() {
  return (
    <>
    <Sticky scrollContext={ this.state.show ? window : null }>
    <Menu className={this.state.show ? "active" : "hidden" } style={{backgroundImage: `url(${background})`}} size={"massive"}>
      <Menu.Menu position="left">
        <Button inverted basic icon><Icon name="eye"/></Button>
      </Menu.Menu>
      <Menu.Menu position="right">
        <Link 
         activeClass="active" 
         to="home" 
         spy={true} 
         smooth={true} 
         duration={500}
        >
          <AnimatedMenuItemOne className="nav" style={{color: "#66FCF1"}}>
            Home
          </AnimatedMenuItemOne>
        </Link>
        <Link
         activeClass="active" 
         className="about" 
         to="about" 
         spy={true} 
         smooth={true} 
         duration={500}
        >
          <AnimatedMenuItemTwo className="nav" style={{color: "#66FCF1"}}>
            About 
          </AnimatedMenuItemTwo>
        </Link>
        <Link
         activeClass="active" 
         className="experience" 
         to="experience" 
         spy={true} 
         smooth={true} 
         duration={500}
        >
          <AnimatedMenuItemThree className="nav" style={{color: "#66FCF1"}}>
            Experience 
          </AnimatedMenuItemThree>
        </Link>
        <Link 
         activeClass="active" 
         className="contact" 
         to="contact" 
         spy={true} 
         smooth={true} 
         duration={500}
        >
          <AnimatedMenuItemFour className="nav" style={{color: "#66FCF1"}}>
            Contact
          </AnimatedMenuItemFour>
        </Link>
        <Button inverted as="a" href="https://docs.google.com/document/d/1GUpkBJqvO7lsJnV8Mfw72dtQAa0IbOLekINAdACPk24/edit?usp=sharing" color="black">
          <AnimatedMenuItemFive className="nav" style={{color: "#66FCF1"}}>
            Resume 
          </AnimatedMenuItemFive>
        </Button>
      </Menu.Menu>
    </Menu>
    </Sticky>
  </>
    );
  };
};

const fadeIn = keyframes`
  from { 
    top: -25px
    opacity: 0;
    transformation: translated3d(0, -20%, 0);
  }
  to {
    top: 0px;
    opacity: 1;
    transform: translated3d(0, 0, 0);
  }
`

const AnimatedMenuItemOne = styled(Menu.Item)`
  margin: 0 5px; 
  line-height: 100px;
  opacity: 0;
  animation: ${fadeIn} .5s ease-in both; 
  cursor: pointer;
`

const AnimatedMenuItemTwo = styled(Menu.Item)`
  margin: 0 5px; 
  line-height: 100px;
  opacity: 0;
  animation: ${fadeIn} .75s ease-in both;
  cursor: pointer; 
`
const AnimatedMenuItemThree = styled(Menu.Item)`
  margin: 0 5px; 
  line-height: 100px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in both; 
  cursor: pointer;
`
const AnimatedMenuItemFour = styled(Menu.Item)`
  margin: 0 5px; 
  line-height: 100px;
  opacity: 0;
  animation: ${fadeIn} 1.25s ease-in both; 
  cursor: pointer;
`
const AnimatedMenuItemFive = styled(Menu.Item)`
  margin: 0 5px; 
  line-height: 100px;
  opacity: 0;
  animation: ${fadeIn} 1.50s ease-in both; 
  cursor: pointer;
`

export default Navbar; 