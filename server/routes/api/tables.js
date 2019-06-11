const router = require("express").Router();
const tableController = require("../../controllers/tableController");

// "/api/tables/"
router
    .route("/")
    .get(tableController.findAll);
// "/api/tables/:id"
router
    .route("/:id")
    .get(tableController.findById)
    .put(tableController.updateTable)
    .delete(tableController.removeTable);
// "/api/tables/restaurant/:id"
router 
    .route("/restaurant/:id")
    .post(tableController.createTables);

module.exports = router;