
exports.up = function(knex) {
  return knex.schema.createTable('subscribers', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('subscribers')
}
