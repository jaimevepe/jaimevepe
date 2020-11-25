// TODO: The  stored API calss/ to be imported

import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

// Fetch Data for Cards
export const fetchData = async (country) => {
    let changableUrl = url;

    if(country) { // if country is populated, than change url with changableUrl
        changableUrl = `${url}/countries/${country}`
    }

    try { // try block will execute if fetch is successful
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changableUrl);


        return {confirmed, recovered, deaths, lastUpdate}

    } catch (error) {
        console.log(error)
    }
}


// Fetch Data for Charts/Line graph

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData
        
    } catch (error) {
        console.log("fetchDailyData: ", error)
    }
}



/// Fetch Data for the country picker

export const fetchCountries = async () => {
    try {
        const { data: {countries} } = await axios.get(`${url}/countries`)

        return countries.map((country) => country.name);
        
    } catch (error) {
        console.log("Error from fetchCountries: ", error)
    }
}