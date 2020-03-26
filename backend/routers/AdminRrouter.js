const express = require("express");
const { adminController } = require("../controllers");
const router = express.Router();


router.put('/editgame/:selectedidEdit', adminController.editGame)
router.put('/approvepay/:id', adminController.approvePayment)
router.post('/addGame', adminController.postGame)
router.post('/addgenre', adminController.postGenre)
router.post('/searchgame/:page', adminController.searchGame)
router.get('/getgenre', adminController.getGenre)
router.get('/getgameadmin/:page', adminController.getGameAdmin)
router.get('/getpayment/:page', adminController.getPayment)
router.get('/getdetailgame/:id', adminController.getDetailGame)
router.get('/getlatest', adminController.getLatestGame)
router.get('/getstore/:page', adminController.getStore)
router.get('/gethistory/:page', adminController.getHistory)
router.delete('/deletegame/:selectedId', adminController.deleteGame)
router.delete('/deletegenre/:selectedId', adminController.deleteGenre)

module.exports = router