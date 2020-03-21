const express = require("express");
const { UserController } = require("../controllers");
const router = express.Router();

router.post('/addcart', UserController.addCart)
router.post('/checkout/:iduser', UserController.checkoutCart)
router.put('/uploadTrans/:iduser', UserController.postTransaction)
router.get('/gettotalharga/:id', UserController.getTotalHarga)
router.get('/getcart/:id', UserController.getDetailCart)
router.delete('/deletecart/:id', UserController.deleteCart)

module.exports = router