const router = require("express").Router();
const MainController = require("../controllers/MainController.js")

router.get("/", MainController.index)
router.get("/detalle/:id", MainController.detalle)



module.exports = router

