const { Router } = require("express")

const userRouter = require("./users.routes")
const foodPlatesRouter = require("./foodPlates.routes")

const routes = Router();

routes.use("/users", userRouter)
routes.use("/plates", foodPlatesRouter)

module.exports = routes;