const AppError = require("../utils/AppError");

const knex = require("../database/knex");

const { hash } = require("bcryptjs")

class UsersController {
    async create(request, response) {
        const { name, email, password, isAdmin } = request.body;

        const hashedPassword = await hash(password, 8);

        const checkUserExists = await knex("users").where({ email }).first()
        if (checkUserExists) {
            throw new AppError("Este e-mail já esta em uso")
        }

        await knex("users").insert({ name, email, password: hashedPassword, isAdmin });

        return response.status(201).json()
    }

    async update(request, response) {
        const { name, email, password } = request.body;
        const { user_id } = request.params;

        const user = await knex("users").where({ user_id });
        if (!user) {
            throw new AppError("Usuário não encontrado");
        }

        const userWithUpdatedEmail = await knex("users").where({ email });

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.user_id) {
            throw new AppError("Este e-mail já está em uso");
        }

        user.name = name;
        user.email = email;

        await knex("users").update({
            name,
            email,
            updated_at: knex.fn.now(),
        }).where({ user_id });

        return response.status(200).json();
    }

}

module.exports = UsersController;