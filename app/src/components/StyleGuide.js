import React, { Component } from 'react'
import { Grid, Paper, Typography, AppBar, Toolbar, Button, TextField, Avatar } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#5ec95c'
        }
    }
});

const root = {
    flexGrow: 1
}

const gridStyle = {
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative',
    textAlign: 'left',
    overflow: 'auto'
}

const lightBlueStyle = {
    margin: 10,
    backgroundColor: '#72bbf8'
}

const greenStyle = {
    margin: 10,
    backgroundColor: '#5ec95c'
}
const orangeStyle = {
    margin: 10,
    backgroundColor: '#ffb420'
}

const blueStyle = {
    margin: 10,
    backgroundColor: '#2196f3'
}

// The page
export class StyleGuide extends Component {
    render() {

        return (
            <MuiThemeProvider theme={theme}>
                <div style={root}>
                    <Grid container spacing={16}>
                        <Grid item style={gridStyle} xs={12}>
                            <Typography variant="headline" color="inherit" style={root}> Style Guide </Typography>
                        </Grid>
                        <Grid item style={gridStyle} xs={12}>
                        <Paper>
                        <Typography variant="headline"> Typography </Typography>
                            <Typography variant="h1"> h1 </Typography>
                            <Typography variant="h2"> h2 </Typography>
                            <Typography variant="h3"> h3 </Typography>
                            <Typography variant="h4"> h4 </Typography>
                        </Paper>
                        </Grid>
                        <Grid item style={gridStyle} xs={12}>
                            <Typography variant="headline" color="inherit" style={root}> Colors </Typography>
                        </Grid>
                        <Grid item style={gridStyle} xs={6}>
                            <div> <Avatar style={blueStyle}></Avatar>
                            <Typography variant="h6" color="inherit" style={root}> #2196f3 </Typography></div>
                            <Avatar style={lightBlueStyle}></Avatar>
                            <Typography variant="h6" color="inherit" style={root}> #72bbf8 </Typography>
                            <Avatar style={lightBlueStyle}></Avatar>
                            <Avatar style={greenStyle}></Avatar>
                            <Avatar style={orangeStyle}></Avatar>
                        </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        )
    }
}
