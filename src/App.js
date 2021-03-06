import React, { useState, useEffect }from 'react';
import { Container, Grid } from "semantic-ui-react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience"; 
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import styled, { keyframes } from 'styled-components';
import background from "./images/13853-gradient.jpg";


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect( () => {
    setInterval(toggleLoading, 5000)
  }, [])

  const toggleLoading = () => {
    setLoading(!loading)
  }

  return(
    <>
    <Grid.Row>
      <BackgroundColor>
          { loading ? <Grid><Test /></Grid> :  
            <>
            <Grid.Row textAlign="right">
              <Navbar />
            </Grid.Row>
              <Grid>
                <Container>
                  <Grid.Column mobile={16} tablet={8} computer={4}>
                    <Home />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={4}>
                    <About /> 
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={4}>
                    <Experience />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={4}>
                    <Contact />
                  </Grid.Column>
                </Container>
              </Grid>
            <Grid.Row textAlign="center">
              <Footer /> 
            </Grid.Row>
            </>
          }
      </BackgroundColor>
    </Grid.Row>
    </>
  )
}

export const BackgroundColor = styled.div`
  background-image: url("${background}"); 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
`

export default App;
