const { Router } = require("express")
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const FoodPlatesController = require("../controllers/FoodPlatesController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const foodPlatesRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const foodPlatesController = new FoodPlatesController();

foodPlatesRoutes.use(ensureAuthenticated)

foodPlatesRoutes.get("/", foodPlatesController.index)
foodPlatesRoutes.post("/", foodPlatesController.create)
foodPlatesRoutes.get("/:plates_id", foodPlatesController.show)
foodPlatesRoutes.delete("/:plates_id", foodPlatesController.delete)
foodPlatesRoutes.patch("/photo", ensureAuthenticated, upload.single("photo"), (req, res) => {
  console.log(req.file.filename);
  res.json()
})

module.exports = foodPlatesRoutes;