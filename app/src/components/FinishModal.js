import React, { Component } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

const nextModule = "TODO"

const helpButtonColor = {
    color: '#ffb420'
}

const triesToHint = 2

export class FinishModal extends Component {
    constructor(props) {
        super(props)

        // Basically, this binding crap needs to happen in order for each
        // of the functions below to be able to access this component's
        // 'props' variable.
        this.SetDialogText = this.SetDialogText.bind(this)
        this.SetDialogTitle = this.SetDialogTitle.bind(this)
        this.SetPrimaryButtonText = this.SetPrimaryButtonText.bind(this)
        this.checkIfNeedHints = this.checkIfNeedHints.bind(this)
    }

    // Component state
    state = {
        showSelf: this.props.open
    }

    // Events
    handleButtonClick = () => {
        this.props.onClose();
    }

    handleStuckButtonClicked = () => {
        this.props.onClose();
        this.props.hintRequested();
    }

    // Functional components to make it cleaner
    SetDialogText() {
        if (this.props.success) {
            return <div>Up next: {nextModule}</div>;
        } 
        return <div>Yikes, not quite. How about you give it another go?</div>;
    }

    SetDialogTitle() {
        if (this.props.success) {
            return <div>Mathematical!</div>
        }
        return <div>Dang it!</div>
    }

    SetPrimaryButtonText() {
        if (this.props.success) {
            return <div>Let's Rock!</div>
        } 

        else if (this.props.tries > triesToHint) {
            return <div>Never give up!</div>
        }

        return <div>That was just a warm up!</div>
    }

    checkIfNeedHints() {
        if (!this.props.success && this.props.tries > triesToHint) {
            return (
                <Button 
                    style={helpButtonColor}
                    onClick={this.handleStuckButtonClicked}
                    >
                    I'm stuck...
                </Button>
            )
        }
    }

  render() {
    const { ...other } = this.props;

    return (
      <Dialog 
        {...other}
        onClose={this.handleClose}>
        <DialogTitle>{this.SetDialogTitle()}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {this.SetDialogText()}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            {/* After some failed tries, help button shows! */}
            <div>
                {this.checkIfNeedHints()}
            </div>
            <Button onClick={this.handleButtonClick} color="primary">
                {this.SetPrimaryButtonText()}
            </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default FinishModal
