const router = require('express').Router();
let User = require('../data/user.model');

router.route('/').get((req, res) => {
    //User.find() gets a list of all users from database
    //Returns a promise, then get all users and return in json format
    //If there's an error (.catch), return an error 
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err)); 
})

router.route('/add').post((req, res) => {
    const username = req.body.username; 
    const newUsername = new User({username}); 

    newUsername.save() 
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + error));
})

module.exports = router; 