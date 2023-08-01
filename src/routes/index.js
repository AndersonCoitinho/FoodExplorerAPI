const { Router } = require("express")

const userRouter = require("./users.routes")
const foodPlatesRouter = require("./foodPlates.routes")
const sessionsRouter = require("./sessions.routes")

const routes = Router();

routes.use("/users", userRouter)
routes.use("/plates", foodPlatesRouter)
routes.use("/sessions", sessionsRouter)

module.exports = routes;