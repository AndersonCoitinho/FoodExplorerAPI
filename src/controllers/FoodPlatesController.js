const knex = require("../database/knex");

class FoodPlatesController {
  async create(request, response) {
    const { name, description, value } = request.body;
    const { user_id } = request.params

    await knex("foodplates").insert({ name, description, value });

    return response.status(201).json()

  }

}

module.exports = FoodPlatesController;