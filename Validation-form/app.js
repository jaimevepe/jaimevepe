const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const { check, validationResult } = require("express-validator")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.get("/register", (req, res)=> {
    res.render("register.ejs")
})

app.post("/register",  [ 
    check('username', 'This username must be 3+ characters long')
    .exists()
    .isLength({ min: 3 }),

    check('email', 'Email is not valid')
    .isEmail()
    .normalizeEmail()
], (req, res) => {
    
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(422).jsonp(errors.array())
        const alert = errors.array()
        res.render('register.ejs', {
            alert
        })
    }
})

app.listen(port, () => {
    console.log("App listening on port: ", port)
});