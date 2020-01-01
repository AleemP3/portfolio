import React, { useState, useEffect } from "react";
import { Divider, Image, List } from "semantic-ui-react"; 
import { Element } from 'react-scroll';
import aleem from "../images/Aleem.JPG";
import "../App.css";

const About = () => {

  const [showAbout, setShowAbout] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, [])

  const handleScroll = (e) => {
    setScrollPos(document.body.getBoundingClientRect().top)
    if (document.body.getBoundingClientRect().top < -350) {
      setShowAbout(!showAbout)
    }
  }

  return (
    <>
    <Divider hidden className="divider"/>
    <Element name="about" className={showAbout ? "activeAbout" : "hiddenAbout"}>
      <div className="borderAbout">
        <Image src={aleem} width={360} height={540}/>
        <h2 className="AboutHeader">About Aleem The Dream<hr /></h2>
        <div className="aboutMe">
          <p>My name is Aleem Pathammavong and I am currently a <br /> 
             web development student at Dev Point Labs. <br /> <br />
             I love the challenges that come with web developing and <br /> I want
             to become an efficient full-stack web developer. To do <br />
             this I look for any opportunity I can find to learn and grow.
             <br />
             <br />
             Here are the Skills I've learned thus far 
             <br /> 
             <br /> 
             <div className="ListItems">
                <List horizontal relaxed size="huge">
                  <List.Item>
                    <List.Content><List.Icon name="js"/>- JavaScript (ES6+)</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content> <List.Icon name="react"/> - React </List.Content>
                  </List.Item>
                </List>
              <br />
                <List horizontal relaxed size="huge">
                  <List.Item>
                    <List.Content>
                      <Image className="iconImages" avatar src="https://img.icons8.com/office/16/000000/ruby-programming-language.png" />- Ruby
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Image className="iconImages" avatar src="https://insights.dice.com/wp-content/uploads/2012/05/ruby-on-rails.jpg" />- Ruby on Rails 
                    </List.Content>
                  </List.Item>
                </List>
              <br />
                <List horizontal relaxed size="huge">
                  <List.Item>
                    <List.Content> <List.Icon name="html5"/> - HTML </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content> <List.Icon name="css3 alternate"/> - CSS </List.Content>
                  </List.Item>
                </List>
            </div>
          </p>
        </div>
      </div>
    </Element>
    </>
  );
};

export default About;