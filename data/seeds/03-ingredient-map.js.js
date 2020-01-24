
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe_Ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe_Ingredient').insert([
        {id: 1, recipe_id: 3, ingredient_id: 8, quantity: 1},
        
        {id: 2, recipe_id: 1, ingredient_id: 2, quantity: 1},
        {id: 3, recipe_id: 1, ingredient_id: 9, quantity: 2},
        {id: 4, recipe_id: 1, ingredient_id: 7, quantity: 3},

        {id: 5, recipe_id: 2, ingredient_id: 9, quantity: 8},
        {id: 6, recipe_id: 2, ingredient_id: 6, quantity: 3},
        {id: 7, recipe_id: 2, ingredient_id: 4, quantity: 2},
        {id: 8, recipe_id: 2, ingredient_id: 8, quantity: 2},
        {id: 9, recipe_id: 2, ingredient_id: 3, quantity: 1},
        {id: 10, recipe_id: 2, ingredient_id: 10, quantity: 4},
        {id: 11, recipe_id: 2, ingredient_id: 1, quantity: 1},
      ]);
    });
};
