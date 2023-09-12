const { Router } = require("express")

const UsersController = require("../controllers/UserController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router();
const userController = new UsersController();

usersRoutes.post("/", userController.create)
usersRoutes.put("/:user_id", ensureAuthenticated, userController.update)

module.exports = usersRoutes;