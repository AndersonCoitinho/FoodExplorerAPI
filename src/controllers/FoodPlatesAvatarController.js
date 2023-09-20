const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class FoodPlatesAvatarController {
  async update(request, response) {
    const { plates_id } = request.params;
    const photoFilename  = request.file.filename;
    const diskStorage = new DiskStorage();
    const foodplates = await knex("foodplates").where({ plates_id: plates_id }).first()

    if (!foodplates) {
      throw new AppError("Prato de comida não encontrado", 404);
    }

    const filename = await diskStorage.saveFile(photoFilename);
    foodplates.photo = filename

    await knex("foodplates").update(foodplates).where({ plates_id: plates_id });

    return response.json(foodplates);
  }
}

module.exports = FoodPlatesAvatarController;