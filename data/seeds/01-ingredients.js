
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredient').insert([
        {id: 1, name: 'tsp coriander'},
        {id: 2, name: 'tsp turmeric'},
        {id: 3, name: 'eye of newt'},
        {id: 4, name: 'red onion'},
        {id: 5, name: 'cup whole wheat flour'},
        {id: 6, name: 'cup jasmine rice'},
        {id: 7, name: 'g unicorn horn'},
        {id: 8, name: 'stalk celery'},
        {id: 9, name: 'can pureed low sodium tomatoes'},
        {id: 10, name: "tsp childrens' tears"},
      ]);
    });
};
