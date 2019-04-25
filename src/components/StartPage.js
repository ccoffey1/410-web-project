import React, { Component } from 'react'
import { Paper, Slide, FormControl, InputLabel, Input, FormHelperText, OutlinedInput, TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const frame = {
  position: 'relative',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: blue[500]
}

const titleContainer = {
  position: 'absolute',
  textAlign: 'center',
  width: '100%',
  top: '50%',
  transform: 'translate(0, -50%)'
}

const title = {
  fontSize: '5em',
  color: 'white',
}

export class StartPage extends Component {

  state = {
    name: "",
    nameMissing: false
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
      nameMissing: false
    })
  }

  handleLeftFocus = () => {
    if (this.state.name == "") {
      this.setState({
        nameMissing: true
      })
    }
  }

  render() {
    return (
      <Slide in={true} direction="down" timeout={2000}>
        <div style={frame}>
          <div style={titleContainer}>
            <label style={title}>So, you wanna be a programmer?</label>
            <TextField 
              onChange={this.handleChange}
              defaultColor="white"
              inputProps={{
                    style: { fontSize: '3em' },
                    input: { fontColor: 'white' }
                  }}
            />
          </div>
        </div>
      </Slide>
    )
  }
}

export default StartPage;
