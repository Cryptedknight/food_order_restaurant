const router = require("express").Router();
const dishController = require("../../controllers/dishController");

// "/api/dishes/"
router
    .route("/")
    .get(dishController.findAll);
// "/api/dishes/:id"
router
    .route("/:id")
    .get(dishController.findById)
    .put(dishController.update)
    .delete(dishController.remove);
// "/api/dishes/restaurant/:id" => id refers to restaurantId
router
    .route("/restaurant/:id")
    .post(dishController.create);

module.exports = router;