const connection = require('./connection')

// PROFILES

function getProfiles(db = connection){
  return db('profiles').select('*')
}

function addProfile(profile, db = connection){
  return db('profiles')
  .insert({
    image_url: profile.image_url,
    facebook_url: profile.facebook_url,
    gender: profile.gender,
    first_name: profile.first_name,
    last_name: profile.last_name,
    birthday: profile.birthday,
    address: profile.address,
    city: profile.city,
    phone: profile.phone,
    zipCode: profile.zipCode
  })
}

function getProfileById(id, db = connection){
  return db('profiles')
  .where('id', id)
  .select()
  .first()
}

function deleteProfile(id, db = connection){
  return db('profiles')
  .where('id', id)
  .delete()
}

function updateProfile(id, profile, db=connection){
  return db('profiles')
  .where('id', id)
  .update({
    image_url: profile.image_url,
    facebook_url: profile.facebook_url,
    gender: profile.gender,
    first_name: profile.first_name,
    last_name: profile.last_name,
    birthday: profile.birthday,
    address: profile.address,
    city: profile.city,
    phone: profile.phone,
    zipCode: profile.zipCode
  })
}

module.exports = {
  getProfiles,
  getProfileById,
  addProfile,
  updateProfile,
  deleteProfile
}