const express = require("express");

const router = express.Router();

router.post('/register', (req,res) =>{
    res.json({message:"Regsiter the user"})
})

router.post('/login', (req,res) =>{
    res.json({message:"login the user"})
})

router.post('/current', (req,res) =>{
    res.json({message:"Current the user"})
})

module.exports = router;