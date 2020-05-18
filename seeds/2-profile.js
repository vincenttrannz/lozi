
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: 1, 
          image_url: 'https://i.imgur.com/lghsexv.jpg',
          gender: 'Mr', 
          first_name: 'Vincent', 
          last_name: 'Tran',
          birthday: '21/03/1991', 
          address: '6A/57 Manners street, Te Aro, New Zealand', 
          city: 'Wellington', 
          phone: '+64221575362', 
          zipCode: 6011, 
        },
        {
          id: 2, 
          image_url: 'https://pbs.twimg.com/media/DL7hN5cUEAAcim7.jpg', 
          gender: 'Ms',
          first_name: 'Alice', 
          last_name: 'Mai',
          birthday: '22/11/1991', 
          address: 'Tonronto',
          city: 'Canada', 
          phone: '+19059200119', 
          zipCode: 6021, 
        },
      ]);
    });
};
