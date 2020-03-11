const express = require("express");
const { ProductController } = require("../controllers");
const router = express.Router();

router.put('/editgame/:selectedidEdit', ProductController.editGame)
router.post('/addGame', ProductController.postGame)
router.post('/addgenre', ProductController.postGenre)
router.post('/addcart', ProductController.addCart)
router.get('/getcart/:id', ProductController.getDetailCart)
router.get('/getgenre', ProductController.getGenre)
router.get('/getgame', ProductController.getGame)
router.get('/getdetailgame/:id', ProductController.getDetailGame)
router.get('/getlatest', ProductController.getLatestGame)
router.delete('/deletecart/:id', ProductController.deleteCart)
router.delete('/deletegame/:selectedId', ProductController.deleteGame)
router.delete('/deletegenre/:selectedId', ProductController.deleteGenre)

module.exports = router