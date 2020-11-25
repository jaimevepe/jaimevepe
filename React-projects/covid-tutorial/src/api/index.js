// TODO: The  stored API calss/ to be imported

import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

// Fetch Data for Cards
export const fetchData = async () => {

    try { // try block will execute if fetch is successful
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);


        return {confirmed, recovered, deaths, lastUpdate}

    } catch (error) {
        console.log(error)
    }
}


// Fetch Data for Charts/Line graph



/// Fetch Data for the country picker