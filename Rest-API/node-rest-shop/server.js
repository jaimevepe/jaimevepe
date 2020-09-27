const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const routes = require('./api/routes/routes');

const port = process.env.PORT || 5000;

const mongoose = require('mongoose')



app.use(morgan('dev')); // must be placed before routes.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/node-api-tutorial", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected...."))
  .catch((err) => console.log(err));

// cors headers for cors errors

const cors = require('cors')
app.use(cors())

// app.use((req, res, next) => {
//     res.header('Access-Controll-Allow-Origin', '*'); // * means all have access
//     res.header('Access-Control-Allow-Headers', 
//     'Origin, XRequested-With, content-Type, Accept, Authorization'
//     );// All of this have access
//     if (req.method === 'OPTIONS') {
//         res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({})
//     }
//     next();
// }) 

app.use('/products', routes); // /api/routes is the Route to handle the requests

app.use((req, res, next) => { // incase a specific route wasnt found.
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

app.get("/", (req, res, next) => {
    res.status(200).json({ //since I didnt have an view engine
        message: 'Server is running'
    })
})


app.listen(port, () => {
    console.log("App listen on, ", port)
});