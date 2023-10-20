const knex = require("../database/knex");

class FoodPlatesController {
  async create(request, response) {
    const { name, description, value, category, ingredients } = request.body;

    const [plates_id] = await knex("foodplates").insert({ name, description, value, category });

    if (ingredients && Array.isArray(ingredients)) {
      const ingredientsInsert = ingredients.map(name => {
        return {
          name,
          plates_id
        };
      });

      await knex("ingredients").insert(ingredientsInsert);
    }

    return response.status(201).json(plates_id)

  }
  /*ataulizar category e ingredients*/

  async update(request, response) {
    const { name, description, value, category } = request.body;
    const { plates_id } = request.params;

    await knex("foodplates").update({ name, description, value, category, updated_at: knex.fn.now(), }).where({ plates_id });

    return response.status(200).json()
  }

  async show(request, response) {
    const { plates_id } = request.params;

    const plates = await knex("foodplates").where({ plates_id }).first()
    const ingredients = await knex("ingredients").where({ plates_id: plates_id })

    return response.json({plates, ingredients})

  }

  async delete(request, response) {
    const { plates_id } = request.params;

    await knex("foodplates").where({ plates_id }).delete();

    return response.json();

  }

  async index(request, response) {
    /*const { name, user_id } = request.query

    const plates = await knex("foodplates")
      .whereLike("name", `%${name}%`)
      .orderBy("name")

      */

      const plates = await knex("foodplates")

    return response.json(plates);
  }

}

module.exports = FoodPlatesController;