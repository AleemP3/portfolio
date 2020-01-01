import React, { useState, useEffect } from "react";
import { Divider, Image, Button } from "semantic-ui-react"; 
import { Element } from 'react-scroll';

const Contact = () => { 

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
    if (document.body.getBoundingClientRect().top < -1800) {
      setShowAbout(!showAbout)
    }
  }

  return(
    <>
    <Divider hidden className="divider"/>
      <Element name="contact" className={showAbout ? "activeExperience" : "hiddenExperience"}>
          <div className="contactpage">
            <p>I am always looking for opportunities to grow and learn</p>
            <p>Contact me @</p>
            <p>Email: Aleemp321@yahoo.com</p>
          </div>
      </Element>
    </>
  )
}

export default Contact; 