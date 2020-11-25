import React, { Component } from 'react'
import styles from './App.module.css'

import { Cards, Chart, CountryPicker } from './components'

import { fetchData } from './api'

class App extends Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState( { data: fetchedData } )
    }

    render() {
        return (
            <div className={styles.cointaner}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App
