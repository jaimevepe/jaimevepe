import React, { Component } from 'react'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'

const theme = createMuiTheme({//To remove warning of required "theme"
  /* theme for v1.x */
 });

export class success extends Component {
    render() {
        const navBarStyle = {
            padding: 15
          }
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar style={navBarStyle} position="static">
                        
                        <Typography variant="h5">
                            Success
                        </Typography>  
                        
                    </AppBar>
                    <h1>Thank You For Your Submission</h1>
                    <p>You will get an email with further instructions</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default success
