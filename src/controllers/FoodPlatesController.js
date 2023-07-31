const knex = require("../database/knex");

class FoodPlatesController {
  async create(request, response) {
    const { name, description, value } = request.body;
    const { user_id } = request.params

    await knex("foodplates").insert({ name, description, value });

    return response.status(201).json()

  }

  async show(request, response) {
    const { plates_id } = request.params;
    
        const plates = await knex("foodplates").where({plates_id}).first()

        return response.json(plates)

  }

  async delete (request, response) {
    const { plates_id } = request.params;

    await knex("foodplates").where({plates_id}).delete();

    return response.json();

  }

}

module.exports = FoodPlatesController;