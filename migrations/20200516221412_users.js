
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.binary('hash')
    table.string('email')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
