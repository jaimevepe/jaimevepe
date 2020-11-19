import React, { Component } from 'react'
import Confirm from './Confirm';
import Success from './Success'
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';


export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };

    // TODO: Procced to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // TODO: Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value}); //whatever is entered will become input
    };

    render() {
        // Pull step from state
        const { step } = this.state;
        // Pull fields from state
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        // to pass values to components and render all the fields
        const values = { firstName, lastName, email, occupation, city, bio };
        //CSS for TextFields
        const style = { 
          textField: {
            width: 250,
            marginTop: 15
          }
        }
        switch(step) {
            case 1:
            return (
              <FormUserDetails 
                nextStep = {this.nextStep}
                handleChange = { this.handleChange}
                values={values}
                style={style.textField}
               />
             )
            case 2:
              return (
                <FormPersonalDetails
                  nextStep = {this.nextStep}
                  prevStep = {this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  style={style.textField}
                 />
              )
            case 3:
              return (
                <Confirm 
                  nextStep = {this.nextStep}
                  prevStep = {this.prevStep}
                  values={values}
                />
              )
            case 4:
            return (
              <Success />
            )
        }
    }
}

export default UserForm;
