const { Router } = require("express")

const UsersController = require("../controllers/UserController")

const usersRoutes = Router();
const userController = new UsersController();

usersRoutes.post("/", userController.create)
usersRoutes.put("/:user_id", userController.update)

module.exports = usersRoutes;