import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'

import { fetchDailyData } from '../../api'

import styles from './Chart.module.css';

const Chart = () => {

    const [dailyData, setDailyData] =  useState([])

    useEffect(() => { // to populate dailyData
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = ( //lineChart is for the gobal data/gobal scale
        dailyData.length !== 0
         ? ( // if dailyData isn't = 0, then show line chart
            <Line 
              data={{ 
                  labels: dailyData.map(({ date }) => date),
                  datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                  }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                  }],
            }}
          />) : null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
export default Chart;