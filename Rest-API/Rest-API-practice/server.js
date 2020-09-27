import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.json()); // that we will use json data for the app

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello from home page!')
})

app.listen(port, () => {
    console.log("Server Running on Port: ", port)
});
