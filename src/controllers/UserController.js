const AppError = require("../utils/AppError");

const knex = require("../database/knex");

const { hash } = require("bcryptjs")

class UsersController {
    async create(request, response) {
        const { name, email, password, isAdmin } = request.body;

        const hashedPassword = await hash(password, 8); 

        const checkUserExists = await knex("users").where({email}).first()
        if(checkUserExists) {
            throw new AppError("Este e-mail já esta em uso")
        }

        await knex("users").insert({name, email, password: hashedPassword, isAdmin});

        return response.status(201).json()
    }

}

module.exports = UsersController;