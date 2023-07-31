const { Router } = require("express")

const FoodPlatesController = require("../controllers/FoodPlatesController")

const foodPlatesRoutes = Router();
const foodPlatesController = new FoodPlatesController();

foodPlatesRoutes.post("/", foodPlatesController.create)

module.exports = foodPlatesRoutes;