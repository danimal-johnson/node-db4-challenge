const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
}

function getRecipes() {
// SELECT id, name FROM [Recipe];
  return db('Recipe')
    .select('id', name);
}

function getShoppingList (recipeId) {
// SELECT Q.quantity, I.name
// FROM Recipe_Ingredient as Q
// JOIN Ingredient as I
// ON Q.ingredient_id = I.id
// WHERE Q.recipe_ID = 2;
  return db('Recipe_Ingredient as Q')
    .join('Ingredient as I', 'I.id', 'Q.ingredient_id')
    .where({recipe_id: recipeId})
    .select('Q.quantity', 'I.name');

}

function getInstructions (recipeId) {
// SELECT description, name FROM Recipe
// where id = 2;
  return db('Recipe')
    .where( {id: recipeId} )
    .select('description');
}

function find() {
  // SELECT * FROM schemes
  return db("schemes");
}

function findById(id) {
  // SELECT * FROM schemes where id = id
  return db("schemes")
    .where({ id: id })
    .first();
    // TODO: Resolve failures to null?
}

function findSteps(schemeId) {
  // SELECT s.id, c.scheme_name,
  //   s.step_number, s.instructions
  // FROM steps as s
  // JOIN schemes as c
  // ON c.id = s.scheme_id
  // WHERE s.scheme_id = schemeId
  // ORDER BY s.step_number;
  return db("steps as s")
    .join("schemes as c", "c.id", "s.scheme_id")
    .where({ scheme_id: schemeId})
    .select("s.id", "c.scheme_name",
      "s.step_number", "s.instructions")
    .orderBy("s.step_number");
}

function add(schemeData) { // FIXME: Return
  console.log("Adding data:", schemeData);
  return db("schemes")
    .insert(schemeData)
    .then(schemeList => {
      let schemeId = schemeList[0];
      return findById(schemeId);
    })
    .catch(err => console.log(err))

  // console.log("Result =", result);
  //   if (result)
  //     return findById(result[0]);
}

function addStep() { // Stretch Goal
  
}

function update(schemeData, id) { // FIXME
  console.log("Updating", id, "with", schemeData);
  return db("schemes")
    .where ({ id: id })
    .update({ scheme_name: schemeData.scheme_name });
}

function remove(id) {
  // TODO: Return deleted item.
  // Currently only returning # of items deleted.

  // DELETE FROM table_name WHERE condition
  return db("schemes")
  .where({ id: id })
  .del();
}