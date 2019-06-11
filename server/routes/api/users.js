const router = require("express").Router();
const userController = require("../../controllers/userController");

/* "/api/users/:id" 
For getting a customer.
*/
router
    .route("/:id")
    .get(userController.findById);

module.exports = router;