const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class FoodPlatesAvatarController {
  async update(request, response) {
    const plates_id = request.params
    const avatarFileName = request.file.filename;

    const diskStorage = new DiskStorage();

    const foodplates = await knex("foodplates").where({ plates_id }).first();

    /*if (!foodplates_id) {
      throw new AppError("Somente usuários autenticados podem mudar o avatar", 401);
    }*/

    /*if(foodplates.photo) {
      await diskStorage.deleteFile(foodplates.photo)
    }*/
    
    const filename = await diskStorage.saveFile(avatarFileName);
    foodplates.photo = filename

    await knex("foodplates").update(foodplates).where({ id: plates_id});
    
    return response.json({foodplates});

  }
}

module.exports = FoodPlatesAvatarController;