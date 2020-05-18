const express = require('express')
const router = express.Router()
const {getProfiles, getProfileById, addProfile, updateProfile, deleteProfile} = require('../db/profiles')

// GET ALL PROFILES
router.get('/', (req, res) => {
  getProfiles()
    .then((profiles) => {
      res.json(profiles)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req,res)=>{
  getProfileById(id)
  .then(profile =>{
    res.json(profile)
  })
})

// CREATE/ADD NEW PROFILE
router.post('/', (req,res)=>{
  addProfile(req.body)
  .then(()=>{
    res.json({})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// DELETE A PROFILE
router.delete('/:id', (req,res)=>{
  const id = req.params.id
  deleteProfile(id)
  .then(()=>{
    getProfiles()
    .then(profiles=>{
      res.json(profiles)
    })
  })
  .catch(err =>{
    res.status(500).send('DATABASE ERROR: ' + err.message)
  });
})

// UPDATE A TASK
router.put('/:id', (req,res)=>{
  const id = req.params.id
  const profile = req.body
  updateProfile(id, profile)
  .then(()=>{
    getProfileById(id)
    .then(profile =>{
      res.json(profile)
    })
  })
  .catch(err =>{
    res.status(500).send('DATABASE ERROR: ' + err.message)
  });
})


module.exports = router