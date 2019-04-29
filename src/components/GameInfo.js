import React, { Component } from 'react';
import { Avatar, Dialog, DialogTitle, DialogContent, Grid, DialogActions, withStyles, Button, Typography } from '@material-ui/core';

const styles = theme => ({
    innerContainer: {
        position: 'relative',
        padding: 20,
        overflow: 'auto'
    },

    containerPadding: {
        padding: theme.spacing.unit
    },

    title: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: '2em'
    },

    grow: {
        flexGrow: 1,
        textAlign: 'left',
    },

    spacing: {
        flexGrow: 1,
        marginTop: 67
    },

    paper: {
        position: 'relative',
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.primary,
        height: '83vh',
        overflow: 'auto'
    },

    blueAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: '#0091ea'
      },
})


class GameInfo extends Component {
    state = {
        open: true,
        fullWidth: true,
        maxWidth: 'md'
    };

    handleClose = () => {
        this.props.onClose();
    }

    render() {
        const { open, classes } = this.props;

        return (
            <div className = {classes.innerContainer}>
                <Dialog
                    fullWidth={this.state.fullWidth}
                    maxWidth={this.state.maxWidth}
                    open={open}
                    onClose={this.handleClose}
                >
                    <DialogTitle id="game-info-title"> Let's take a quick look at how to play the game...</DialogTitle>
                    <DialogContent >
                    <Grid container justify="center" alignItems="center">
                    <Avatar className={classes.blueAvatar}> 1</Avatar>
                    <Typography variant = "body2"> Read the instructions on the left. </Typography>
                    <Avatar className={classes.blueAvatar}> 2</Avatar>
                    <Typography variant = "body2"> Write some code in the middle panel. </Typography>
                    <Avatar className={classes.blueAvatar}> 3</Avatar>
                    <Typography variant = "body2"> Run the code and see the results on the right. </Typography>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                    <Typography variant = "body2"> Take a look at the "My Story" page to see what story your code generated. </Typography>
                    </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Let's Get Started
                      </Button>
                    </DialogActions>

                </Dialog>

            </div>
        )
    }
}

export default withStyles(styles)(GameInfo)
