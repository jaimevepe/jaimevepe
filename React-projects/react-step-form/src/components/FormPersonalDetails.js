import React, { Component } from 'react'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({//To remove warning of required "theme"
  /* theme for v1.x */
 });
export class FormPersonalDetails extends Component {
    continue= e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
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
                      Enter Personal Details
                    </Typography>  
                  
                </AppBar>  
                  <TextField 
                    placeholder="Enter Your Occupation"
                    label="Occupation"
                    style={style}
                    onChange={handleChange('occupation')} // input from UserForm
                    defaultValue={values.occupation}
                  />
                  <br/>
                  <TextField 
                    placeholder="Enter Your City"
                    label="City"
                    style={style}
                    onChange={handleChange('city')} // input from UserForm
                    defaultValue={values.city}
                  />
                  <br/>
                  <TextField 
                    placeholder="Enter Your Bio"
                    label="Bio"
                    style={style}
                    onChange={handleChange('bio')} // input from UserForm
                    defaultValue={values.bio}
                  />
                  <br/>
                  <Button variant="contained" color="primary"
                    style={styles.button}
                    onClick={this.continue}>
                    Continue
                  </Button>

                  <Button variant="contained" color="secondary"
                    style={styles.button}
                    onClick={this.back}>
                    Back
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

export default FormPersonalDetails
