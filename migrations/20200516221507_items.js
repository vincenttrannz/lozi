
exports.up = function(knex) {
  return knex.schema.createTable('items', table => {
    table.integer('id').primary()
    table.string('name', 50)
    table.string('image_url')
    table.string('description')
    table.string('address')
    table.decimal('price')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('items')
}
