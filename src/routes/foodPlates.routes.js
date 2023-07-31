const { Router } = require("express")

const FoodPlatesController = require("../controllers/FoodPlatesController")

const foodPlatesRoutes = Router();
const foodPlatesController = new FoodPlatesController();

foodPlatesRoutes.get("/", foodPlatesController.index)
foodPlatesRoutes.post("/", foodPlatesController.create)
foodPlatesRoutes.get("/:plates_id", foodPlatesController.show)
foodPlatesRoutes.delete("/:plates_id", foodPlatesController.delete)

module.exports = foodPlatesRoutes;