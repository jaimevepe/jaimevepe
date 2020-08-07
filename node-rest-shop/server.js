const express = require('express');
const app = express();

const routes = require('./api/routes/routes');

const port = process.env.PORT || 5000;

app.use('/api/routes', routes); // /api/routes is the Route to the get req

app.get("/", (req, res) => {
    res.status(200).json({ //since I didnt have an view engine
        message: 'Server is running'
    })
})

app.listen(port, () => {
    console.log("App listen on, ", port)
});