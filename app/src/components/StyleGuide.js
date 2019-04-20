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
    direction: 'row',
    textAlign: 'left',
    overflow: 'auto'
}

const paperStyle = {
    flexGrow: 1,
    position: 'relative',
    textAlign: 'left',
    height: '83vh',
    overflow: 'auto'
  }

const ghostBar = {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative',
    textAlign: 'left',
    overflow: 'auto'
}

const lightBlueStyle = {
    margin: 20,
    backgroundColor: '#72bbf8'
}

const greenStyle = {
    marginTop: 87,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#5ec95c',
    color: '#fafafa'
}
const orangeStyle = {
    margin: 20,
    backgroundColor: '#ffb420'
}

const blueStyle = {
    margin: 20,
    backgroundColor: '#2196f3',
    color: '#fafafa'
}

const grayStyle = {
    margin: 20,
    color: '#616161'
}

const grayColor = {
    margin: 20,
    backgroundColor: '#616161'
}

const homeButton = {
    marginLeft: -12,
    marginRight: 20
}

const hintButton = {
    marginTop: 108,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffb420',
    color: '#fafafa'
}

const navButton = {
    marginTop: 108,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#72bbf8',
    color: '#fafafa'
}

// The page
export class StyleGuide extends Component {
    render() {

        return (
            <MuiThemeProvider theme={theme}>
                <div style={root}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <AppBar>
                                <Toolbar>
                                    <Button color="inherit" style={homeButton}>
                                        <i className="fas fa-qrcode" style={{ marginRight: 10 }}></i>
                                        UCode </Button>
                                    <Typography variant="h3" color="inherit" style={root}> Style Guide
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                        </Grid>
                        <Grid item style={ghostBar} xs={12}></Grid>
                        <Grid item style={gridStyle} xs={4}>
                            <Paper style = {paperStyle}>
                                <Typography variant="h3" style={grayStyle}> Typography </Typography>
                                <Typography variant="h1" style={{ margin: 20 }}> h1 </Typography>
                                <Typography variant="h2" style={{ margin: 20 }}> h2 </Typography>
                                <Typography variant="h3" style={{ margin: 20 }}> h3 </Typography>
                                <Typography variant="h4" style={{ margin: 20 }}> h4 </Typography>
                            </Paper>
                        </Grid>
                        <Grid item style={gridStyle} xs={4}>
                        <Paper style={paperStyle}>
                        <Grid container spacing={12}>
                        <Grid item xs={2} sm ={6}>
                        <Typography variant="h3" style = {grayStyle}> Colors </Typography>
                           <Avatar style={blueStyle}></Avatar>
                            <Typography variant="h6" style={{ margin: 20 }}> #2196f3 </Typography>
                            <Avatar style={lightBlueStyle}></Avatar>
                            <Typography variant="h6" style={{ margin: 20 }}> #72bbf8 </Typography>
                            <Avatar style={grayColor}></Avatar>
                            <Typography variant="h6" style={{ margin: 20 }}> #616161 </Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Avatar style={greenStyle}></Avatar>
                            <Typography variant="h6" style={{ margin: 20 }}> #5ec95c </Typography>
                            <Avatar style={orangeStyle}></Avatar>
                        <Typography variant="h6" style={{ margin: 20 }}> #ffb420 </Typography>
                        </Grid>
                        </Grid>
                        </Paper>
                        </Grid>
                        <Grid item style={gridStyle} xs={4}>
                        <Paper style={paperStyle}>
                        <Grid container spacing={12}>
                        <Grid item xs={2} sm ={6}>
                        <Typography variant="h3" style = {grayStyle}> Buttons </Typography>
                           <Button style={blueStyle}> Home </Button>
                           <Button style={greenStyle}> Run/Submit </Button>
                            </Grid>
                            <Grid item xs={2}>
                            <Button style={hintButton}> Hint </Button>
                            <Button style={navButton}> Navigation </Button>
                        </Grid>
                        </Grid>
                        </Paper>
                        </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        )
    }
}
