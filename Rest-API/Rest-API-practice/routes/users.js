import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "john",
        lastName: "doe",
        age: 25
    },
    {
        firstName: "janes",
        lastName: "doe",
        age: 24
    }
]

router.get('/', (req, res) => {
    res.send(users)
});

router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);

    res.send(`User with the name ${user.firstName} was added to DB`)
})

export default router;