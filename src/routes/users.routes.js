const { Router } = require("express")

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    response.send("funcionanod")
})

module.exports = usersRoutes;