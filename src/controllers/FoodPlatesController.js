const knex = require("../database/knex");

class FoodPlatesController {
  async create(request, response) {
    const { name, description, value } = request.body;

    await knex("foodplates").insert({ name, description, value });

    return response.status(201).json()

  }

  async update(request, response) {
    const { name, description, value } = request.body;
    const { plates_id } = request.params;

    await knex("foodplates").update({ name, description, value, updated_at: knex.fn.now(), }).where({ plates_id });

    return response.status(200).json()
  }

  async show(request, response) {
    const { plates_id } = request.params;

    const plates = await knex("foodplates").where({ plates_id }).first()

    return response.json(plates)

  }

  async delete(request, response) {
    const { plates_id } = request.params;

    await knex("foodplates").where({ plates_id }).delete();

    return response.json();

  }

  async index(request, response) {
    const { name } = request.query
    const user_id = request.user.id

    const plates = await knex("foodplates")
      .whereLike("name", `%${name}%`)
      .orderBy("name")

    return response.json(plates);
  }

}

module.exports = FoodPlatesController;