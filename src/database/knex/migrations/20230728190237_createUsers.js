exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("user_id");
  table.text("name");
  table.text("email");
  table.text("password");
  table.text("avatar").null;
  table.boolean("isAdmin")
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("users");

