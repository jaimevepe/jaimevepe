import React, { Component } from 'react'
import styles from './App.module.css'

import { Cards, Chart, CountryPicker } from './components'

import { fetchData } from './api';

import coronaImage from './images/CovidImage.png'

class App extends Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState( { data: fetchedData } )
    }

    handleCountryChange = async (country) => {
        // Fetching Data
        const fetchedData = await fetchData(country);
        console.log(country, fetchedData)
        // Setting the State
        this.setState({ data: fetchedData, country: country})
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img src={coronaImage} className={styles.image} alt="COVID-19 banner" />
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App
