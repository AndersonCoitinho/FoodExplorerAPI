exports.up = knex => knex.schema.createTable("ingredients", table => {
  table.increments("ingredients_id");
  table.text("name");
  table.integer("plates_id").references("plates_id").inTable("foodplates")
});


exports.down = knex => knex.schema.dropTable("ingredients");

