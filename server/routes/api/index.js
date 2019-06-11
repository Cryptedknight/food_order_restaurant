const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const dishRoutes = require("./dishes");
const tableRoutes = require("./tables");
const orderRoutes = require("./orders");
const userRoutes = require("./users");
const adminRoutes = require("./administrator")

// Book routes
router.use("/restaurants", restaurantRoutes);
router.use("/dishes", dishRoutes);
router.use("/tables", tableRoutes);
router.use("/orders", orderRoutes);
router.use("/users", userRoutes);
router.use("/administrator", adminRoutes);

module.exports = router;
