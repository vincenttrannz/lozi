const express = require('express')
const router = express.Router()
const {getEmail, addEmail} = require('../db/subscribe')

// GET ALL subscriber
router.get('/', (req, res) => {
  getEmail()
    .then((subscriber) => {
      res.json(subscriber)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// ADD NEW EMAIL
router.post('/', (req,res)=>{
  addEmail(req.body)
  .then(()=>{
    res.json({})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router