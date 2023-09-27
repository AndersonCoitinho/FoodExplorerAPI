exports.up = knex => knex.schema.createTable("foodplates", table => {
  table.increments("plates_id");
  table.text("name");
  table.text("description");
  table.text("photo").null;
  table.text("value");
  table.text("category");
  table.text("ingredients");
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("foodplates");

