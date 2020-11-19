import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({ //To remove warning of required "theme"
  /* theme for v1.x */
 });

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange, style } = this.props; 
        const navBarStyle = {
          padding: 15
        }
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>

                  <AppBar style={navBarStyle} position="static">
                    
                      <Typography variant="h5">
                        Enter User Details
                      </Typography>  
                    
                  </AppBar>
                    <br/>
                  <TextField 
                    id="standard-textarea"
                    style={style}
                    label="First Name"
                    placeholder="Enter First Name"
                    onChange={handleChange('firstName')} // input from UserForm
                    defaultValue={values.firstName}
                    multiline
                   />
                  <br/>
                  <TextField 
                    id="standard-textarea"
                    style={style}
                    label="Last Name"
                    placeholder="Enter Last Name"
                    onChange={handleChange('lastName')} // input from UserForm
                    defaultValue={values.lastName}
                    multiline
                   />
                  <br/>
                  <TextField 
                    label="Email"
                    style={style}
                    placeholder="Enter Your Email"
                    onChange={handleChange('email')} // input from UserForm
                    defaultValue={values.email}
                    multiline
                   />
                  <br/>
                  <Button variant="contained" color="primary"
                    style={styles.button}
                    onClick={this.continue}>
                    Continue
                  </Button>
                 

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
