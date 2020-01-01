import React, { useState, useEffect } from "react";
import {Button, Grid, Divider, Segment, Container} from "semantic-ui-react"; 


const Footer = () => (
  <>
  <Divider hidden className="divider"/>
    <Segment vertical style={{ padding: '20px 20px', backgroundColor: "black"}}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={4}>
            <Button basic icon="twitter" as="a" href="https://twitter.com/YoouKnowWhoo" size="massive" color="blue"/>
            <br />
            <br />
            <div className="iconFooter">Twitter</div>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button basic icon="instagram" as="a" href="https://www.instagram.com/yoouknowwhoo/" size="massive" color="inverted white" />
              <br />
              <br />
              <div className="iconFooter">Instagram</div>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button basic icon="github square" as="a" href="https://github.com/AleemP3?tab=repositories" size="massive" color="inverted grey"/>
              <br />
              <br />
              <div className="iconFooter">Github</div>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button basic icon="linkedin" as="a" href="https://www.linkedin.com/in/aleem-pathammavong-94495a192/" size="massive" color="blue" />
              <br />
              <br />
              <div className="iconFooter">LinkedIn</div>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </>
)

export default Footer; 