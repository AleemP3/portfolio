import React from "react";
import { Header, Divider} from "semantic-ui-react"; 
import { Element } from 'react-scroll'
import styled, { keyframes } from 'styled-components';
import { BackgroundColor } from "../App"; 




const Home = () => {

  return (
    <>
    <Element name="home" className="homeElement">
      <div className="border">
      <HomeStyle className="home" as="h3">Yo , my name is</HomeStyle>
      <HomeName className="name" as="h1">Aleem Pathammavong &
        <br /> I like to make cool web apps
      </HomeName>
      <br />
      <HomeDescription className="description">I'm an aspiring webdeveloper currently located
         <br /> Salt Lake City, Utah. I have developed skills in 
         <br /> Ruby, Ruby on Rails, JavaScript, and ReactJS. 
      </HomeDescription>
      </div>
    </Element>
    <Divider hidden className="divider"/>
    </>
  );
};

const HomeStyle = styled(Header)`
  color: #eeeeee; !important
`

const HomeName = styled(Header)`
  color: #eeeeee; !important
`
const HomeTag = styled(Header)`
  color: #fbf9fb; !important
`
const HomeDescription = styled.p`
  color: #e3e1e3;
`

export default Home;

