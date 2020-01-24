
exports.up = function(knex) {
  // Start with the 1's: 1 recipe has many steps and ingrdients
  return knex.schema
    .createTable('Recipe', tbl => {
      tbl.increments();
      tbl.string('name', 127);
      tbl.string('description', 255);
    })
    .createTable('Step', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Recipe')
        .onDelete('RESTRICT') // What happens if this ID is deleted.
        .onUpdate('CASCADE'); // What happens if this ID changes.
      tbl.integer('step_number')
        .unsigned();
      tbl.string('description', 255);
    })
    .createTable('Ingredient', tbl => {
      tbl.increments();
      tbl.string('name', 255); // Includes quantity. Ex: "1C Flour"
    })
    .createTable('Recipe_Ingredient', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Recipe')
        .onDelete('RESTRICT') // What happens if this ID is deleted.
        .onUpdate('CASCADE'); // What happens if this ID changes.
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Ingredient')
        .onDelete('RESTRICT') // What happens if this ID is deleted.
        .onUpdate('CASCADE'); // What happens if this ID changes.

        // CASCADE, SET NULL, DO NOTHING, RESTRICT
    });
};

// Don't need an extra "Book table"
// .createTable('Recipe_Book ', tbl => {
//   tbl.increments();
//   tbl.integer('recipe_id')
//     .unsigned()
//     .notNullable()
//     .references('id')
//     .inTable('Recipe');
// })

exports.down = function(knex) {
  // Follow the relationships. Delete the 'many' side first.
  return knex.schema
    .dropTableIfExists('Step')
    .dropTableIfExists('Ingredient')
    .dropTableIfExists('Recipe')
    .dropTableIfExists('Recipe_Ingredient');
};
