
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe').insert([
        { id: 1,
          name: 'Common Cold Cure',
          description: 'Throw all ingredients in a blender. Serve chilled.'
        },
        { id: 2,
          name: "Witch's Brew",
          description: 'Combine all ingredients in a large vat. Simmer for 3 days. Chant.'
        },
        { id: 3,
          name: 'Celery',
          description: 'Just celery. Eat raw. Remove annoying strings from teeth.'}
      ]);
    });
};
