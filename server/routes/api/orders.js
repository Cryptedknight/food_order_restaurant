const router = require("express").Router();
const orderController = require("../../controllers/orderController");

// "/api/orders/"
router
    .route("/")
    .get(orderController.findAll)
    .post(orderController.createOrder);
    
// "/api/orders/:id"
router
    .route("/:id")
    .get(orderController.findById)
    .put(orderController.updateOrder)
    .delete(orderController.removeOrder);




module.exports = router;