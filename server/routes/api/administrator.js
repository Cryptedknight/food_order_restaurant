const router = require("express").Router();
const adminController = require("../../controllers/administratorController");

// "/api/administrator/"
router
    .route("/")
    .get(adminController.findAll);

router
    .route("/:id")
    .get(adminController.findById)
    .post(adminController.createAdmin)
    .put(adminController.updateAdmin)
    .delete(adminController.removeAdmin);

module.exports = router;