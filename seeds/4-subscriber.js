
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('subscribers').del()
    .then(function () {
      // Inserts seed entries
      return knex('subscribers').insert([
        {id: 1, name: 'Vincent', email: 'tranhieunz@gmail.com'},
        {id: 2, name: 'Alice', email: 'quynhmy2211@gmail.com'},
      ]);
    });
};
