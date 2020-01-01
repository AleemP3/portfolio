import Lottie from 'react-lottie';
import animationData from '../lotties/1217-loading-check-mark.json';
import React, { Component } from 'react';

class Test extends React.Component {

  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return(
      // <BackgroundColor>
        <Lottie options={defaultOptions}
              height={1000}
              width={1000}
        />
    );
  };
};


export default Test; 