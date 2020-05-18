const express = require('express')

const router = express.Router()

const db = require('../db/users')

router.get('/', (req, res) => {
  db.getAllUsers().then(users => {
    res.json(users)
  })
})

router.put('/:id', (req, res) => {
  db.updateUser(req.params.id, req.body)
    .then(() => {
      res.status(200).json({updated: true})
  })
})

module.exports = router