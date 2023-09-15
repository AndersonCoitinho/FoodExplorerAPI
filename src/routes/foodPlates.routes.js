const { Router } = require("express")
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const FoodPlatesController = require("../controllers/FoodPlatesController")
const FoodPlatesAvatarController = require("../controllers/FoodPlatesAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const foodPlatesRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const foodPlatesController = new FoodPlatesController();
const foodPlatesAvatarController =  new FoodPlatesAvatarController();

//foodPlatesRoutes.use(ensureAuthenticated)

foodPlatesRoutes.get("/", foodPlatesController.index)
foodPlatesRoutes.post("/", foodPlatesController.create)
foodPlatesRoutes.put("/:plates_id", foodPlatesController.update)
foodPlatesRoutes.get("/:plates_id", foodPlatesController.show)
foodPlatesRoutes.delete("/:plates_id", foodPlatesController.delete)
foodPlatesRoutes.patch("/photo/:plates_id", upload.single("photo"), foodPlatesAvatarController.update)

module.exports = foodPlatesRoutes;