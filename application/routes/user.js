const express = require('express');
const router = express.Router();

//Login Page Route
router.get('/login', (req, res) => res.render('login'));

//Register Page Route
router.get('/register', (req, res) => res.render('register'));



//Register Handle
router.post('/register', (req, res) => {
    //Your register post route
    console.log("User is being registered.");
    res.redirect('/users/login');
    //Once 
});

module.exports = router;