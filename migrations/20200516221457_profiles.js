exports.up = function(knex) {
  return knex.schema.createTable('profiles', (table)=>{
    table.integer('id').primary()
    table.string('image_url')
    table.string('facebook_url')
    table.string('gender')
    table.string('first_name', 30)
    table.string('last_name', 30)
    table.date('birthday')
    table.string('phone')
    table.string('address', 100)
    table.string('city', 30)
    table.integer('zipCode')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('profiles')
};
