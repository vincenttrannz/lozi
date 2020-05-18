const { generateHash } = require('authenticare/server')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(
        [
          {
            id: 1, 
            username: 'tranhieunz', 
            password: '12345', 
            email: 'tranhieunz@gmail.com',
            created_at: new Date('2020-05-16 22:04:45'),
          },
          {
            id: 2, 
            username: 'alice.mai', 
            password: '54321', 
            email: 'quynhmy2211@gmail.com',
            created_at: new Date('2020-05-16 22:04:45'),
          }
        ].map(user =>{
          return generateHash(user.password)
          .then(hash =>{
            user.hash = hash
            delete user.password
            return user
          })
        }))
        .then(users =>{
          return knex('users').insert(users)
        })
    });
};
