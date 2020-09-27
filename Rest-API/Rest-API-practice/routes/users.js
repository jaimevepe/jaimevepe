import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); //Will generate unique ID's for users

const router = express.Router();

let users = [
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
    // const userId = uuidv4(); //Will generate unique ID's for users
    // const userWithId = { ...user, id:userId } // spread users and add id with uuid
    
    users.push({ ...user, id: uuidv4()}); //this is shorter

    res.send(`User with the name ${user.firstName} was added to DB`)
})

// /users/2 => req.params { id: 2 }
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from DB!`)
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const userUpdated = users.find((user) => user.id === id);


    if(firstName){
        userUpdated.firstName = firstName;
    }

    if(lastName){
        userUpdated.lastName = lastName;
    }

    if(age){
        userUpdated.age = age;
    }
    res.send(`User with the id ${id} was been updated`)
})

export default router;