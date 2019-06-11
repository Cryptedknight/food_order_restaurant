const router = require("express").Router();
const restaurantController = require("../../controllers/restaurantController");

// "/api/restaurants/"
router
    .route("/")
    .get(restaurantController.findAll);
// "/api/restaurants/:id"
router
    .route("/:id")
    .get(restaurantController.findById)
    .post(restaurantController.create)
    .put(restaurantController.update)
    .delete(restaurantController.removeRestaurant);
// "/api/restaurants/add-orders/:id"
router
    .route("/add-orders/:id")
    .put(restaurantController.addOrder);
// "/api/restaurants/remove-orders/:id"
router
    .route("remove-orders/:id")
    .put(restaurantController.removeOrder);
// "/api/restaurants/add-dishes/:id"
router
    .route("add-dishes/:id")
    .put(restaurantController.addDish);
// "/api/restaurants/remove-dishes/:id"
router
    .route("remove-dishes/:id")
    .put(restaurantController.removeDish);

module.exports = router;
