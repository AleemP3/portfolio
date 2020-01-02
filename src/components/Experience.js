import React, { useState, useEffect } from "react";
import { Divider, Image } from "semantic-ui-react"; 
import { Element } from 'react-scroll';

const Experience = () => { 

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
    if (document.body.getBoundingClientRect().top < -1200) {
      setShowAbout(!showAbout)
    }
  }

  return(
    <>
    <Divider hidden className="divider"/>
      <Element name="experience" className={showAbout ? "activeExperience" : "hiddenExperience"}>
        <div className="ExperienceBorder">
          <h2 className="ExperienceHeader">What I've accomplished so far<hr /></h2>
          <div className="MyExperience">
            <p>As I am still a student at Dev Point Labs <br />
              I have not achieved much in my early web developing journey. <br />
              I plan on learning as much as I can from this course and to <br /> 
              continue pushing myself to learn as much as I can afterwards.
              <br /> 
              <br />
              other technologies I would like to learn: Angular, Node, and Vue. 
              <br />
              <br />
              --- Here are some note worthy projects i've completed thus far ---
            </p>
          </div>
          <br />
          <div className="myspace">
            <Image className="MyspaceImage" src="https://img.icons8.com/color/360/000000/myspace.png" as="a" href="https://github.com/AleemP3/myspace"/>
            <div className="myspaceOv">
              <p>this was a project given from Dev Point Labs <br />
                to recreate an old popular social media app called "Myspace". <br />
                I was proud with what I was able to accomplish for this project. <br /> 
                However, I still know there is room to grow and improve.
                <br />
                <br />
                --- technologies used ---
                <ul>
                  <li>Front-End: React</li>
                  <li>Back-End: Ruby on Rails</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="trello">
            <Image className="trelloImage" src="https://img.icons8.com/color/420/000000/trello.png" as="a" href="https://github.com/AleemP3/Trollo" /> 
            <div className="trelloOv">
              <p>this was also a project given from Dev Point Labs 
                to recreate an app called "Trello". <br />
                Trello is a collaboration tool that organizes your projects into boards. <br />
                I was happy with the final product of the app and its functionality. <br /> 
                However, I still know there is room to grow and improve. 
                <br />
                <br />
                --- technologies used ---
                <ul>
                  <li>Front-End/Back-End: Ruby on Rails</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </Element>
    </>
  )
} 

export default Experience;