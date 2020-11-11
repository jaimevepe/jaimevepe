import React, { Component } from 'react'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({//To remove warning of required "theme"
  /* theme for v1.x */
 });
export class Confirm extends Component {
    continue= e => {
        e.preventDefault();
        // PROCESS FORM IF YOU HAVE AN API/BACK-END
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props; 
        const navBarStyle = {
          padding: 15
        }
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>

                  <AppBar style={navBarStyle} position="static">
                      
                      <Typography variant="h5">
                        Confirm
                      </Typography>  
                    
                  </AppBar>
                  <Box display="flex" justifyContent="center">
                  <List>
                    <ListItem>
                      <ListItemText 
                      primary="First Name"
                      secondary={ firstName }
                      />
                    </ListItem>
                      
                    
                    <ListItem>
                      <ListItemText 
                      primary="Last Name"
                      secondary={ lastName }
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText 
                      primary="Email"
                      secondary={ email }
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText 
                      primary="Occupation"
                      secondary={ occupation }
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText 
                      primary="City"
                      secondary={ city }
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText 
                      primary="Bio"
                      secondary={ bio }
                      />
                    </ListItem>
                  </List>
                  </Box>
                  
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

export default Confirm