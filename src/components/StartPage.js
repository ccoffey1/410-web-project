import React, { Component } from 'react'
import { Paper, Slide, FormControl, InputLabel, Input, FormHelperText, OutlinedInput, TextField, Button, Fab, Grow, Zoom } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { Redirect } from "react-router-dom"

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
  paddingTop: '50px',
  paddingBottom: '50px',
  textAlign: 'center',
  width: '100%',
  top: '50%',
  transform: 'translate(0, -50%)'
}

const title = {
  position: 'relative',
  display: 'block',
  wordWrap: 'break-word',
  left: '50%',
  transform: 'translate(-50%, 0%)',
  marginBottom: '50px',
  fontSize: '5em',
  color: 'white',
}

const startBtn = {
  display: 'block',
  left: '50%',
  transform: 'translate(-50%, 0)',
  marginTop: '50px',
  width: '100%',
  fontSize: '1.5em',
  maxWidth: '200px',
  color: 'white',
  textTransform: 'capitalize'
}

const line = {
  border: '1px solid white',
  marginTop: '50px',
  marginBottom: '50px',
}

export class StartPage extends Component {

  state = {
    name: "",
    show: true,
    redirect: false
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleStartClick = () => {
    this.setState({
      show: false
    })
    this.props.onBegin(this.state.name);
  }

  handleClosed = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      console.log("...redirecting to module 1!")
      return <Redirect to='/Module1'/>
    }
  }  

  render() {
    return (
      <div>
        <Slide in={this.state.show} direction="down" timeout={1000} onExited={this.handleClosed}>
          <div style={frame}>
            <div style={titleContainer}>
              <hr style={line}/>
              <label style={title}>Team Undici's Super Lame Coding Game!</label>
              <TextField 
                onChange={this.handleChange}
                placeholder="What's your name?"
                helperText={this.state.errormsg}
                error = {this.state.nameMissing}
                inputProps={{
                      style: { textAlign: 'center', fontSize: '3em', color: 'white', foreground: 'white' },
                    }}
              />
              
              <Fab onClick={this.handleStartClick.bind(this)} color="secondary" variant="extended" disabled={this.state.name.length === 0} style={startBtn}>
                Let's Rock
                <i className="fas fa-angle-right fa-lg" style={{ marginLeft: 10 }}></i>
              </Fab>
              <hr style={line}/>
            </div>
          </div>
        </Slide>

        {this.renderRedirect()}
      </div>
    )
  }
}

export default StartPage;
