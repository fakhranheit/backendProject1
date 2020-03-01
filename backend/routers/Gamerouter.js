const express = require("express");
const { ProductController } = require("../controllers");
const router = express.Router();

router.post('/addGame', ProductController.postGame)
router.get('/getgenre', ProductController.getGenre)
router.get('/getgame', ProductController.getGame)
router.delete('/deletegame/:selectedId', ProductController.deleteGame)


module.exports = router