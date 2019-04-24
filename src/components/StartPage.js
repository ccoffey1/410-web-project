import React, { Component } from 'react'
import { Paper, Slide } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const frame = {
  position: 'relative',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundPosition: 'center',
  background: blue[500]
}

const title = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

export class StartPage extends Component {
  render() {
    return (
      <Slide in={true} direction="down" timeout={2000}>
        <div style={frame}>

        </div>
      </Slide>
    )
  }
}

export default StartPage;
