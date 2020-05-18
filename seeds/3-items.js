exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          id: 1,
          name: "Orange",
          image_url: "https://sites.psu.edu/lifeitmoveson/files/2017/10/orange-1hoca2l.jpg",
          description: "This is an orange",
          price: 100,
          address: "101 Taranaki street",
          created_at: new Date("2020-05-16 22:04:45"),
        },
        {
          id: 2,
          name: "Apple",
          image_url: "https://easyasecigs.co.nz/wp-content/uploads/2019/06/enxqx1wjsxg21-1-1.jpg",
          description: "This is an apple",
          price: 150,
          address: "111 Lambton Quay",
          created_at: new Date("2020-05-16 22:04:45"),
        },
        {
          id: 3,
          name: "Banana",
          image_url: "https://images.everydayhealth.com/images/diet-nutrition/how-many-calories-are-in-a-banana-1440x810.jpg?sfvrsn=be4504bc_0",
          description: "This is a banana",
          price: 200,
          address: "12 The Terrace",
          created_at: new Date("2020-05-16 22:04:45"),
        },
      ]);
    });
};
