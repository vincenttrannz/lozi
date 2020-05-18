const connection = require('./connection')

// subscribers

function getEmail(db = connection){
  return db('subscribers').select('*')
}

function addEmail(subscriber, db = connection){
  return db('subscribers')
  .insert({
    name: subscriber.name,
    email: subscriber.email
  })
}

module.exports = {
  getEmail,
  addEmail
}