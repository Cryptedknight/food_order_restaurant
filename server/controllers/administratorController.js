const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        if (req.query) {
            db.Administrator
                .find(req.query)
                .populate("restaurants")
                .then(dbAdmin => res.json(dbAdmin))
                .catch(err => res.status(422).json(err));
        } else {
            db.Administrator
                .find()
                .populate("restaurants")
                .then(dbAdmin => res.json(dbAdmin))
                .catch(err => res.status(422).json(err));
        }
    },
    findById: (req, res) => {
        db.Administrator(req.params.id)
            .then(dbAdmin => res.json(dbAdmin))
            .catch(err => res.status(422).json(err));
    },
    createAdmin: (req, res) => {
        db.Administrator
            .create(req.body)
            .then(dbAdmin => {
                const adminId = dbAdmin._id;
                return db.User
                    .findByIdAndUpdate(req.params.id, {$push: {administrator: adminId}})
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    updateAdmin: (req, res) => {
        //req.body.restaurants, the value is an array
        if (req.body.restaurants) {
            if (req.body.manage === "add") {
                db.Administrator
                    .findByIdAndUpdate(req.params.id, {$push: {restaurants: req.body.restaurants}})
                    .then(dbAdmin => res.json(dbAdmin))
                    .catch(err => res.status(422).json(err));
            } else if (req.body.manage === "remove") {
                db.Administrator
                    .findByIdAndUpdate(req.params.id, {$pull: {restaurants: req.body.restaurants}})
                    .then(dbAdmin => res.json(dbAdmin))
                    .catch(err => res.status(422).json(err));
            }
        } else {
            db.Administrator
                .findByIdAndUpdate(req.params.id, req.body)
                .then(dbAdmin => res.json(dbAdmin))
                .catch(err => res.status(422).json(err));
        }
    },
    removeAdmin: (req, res) => {
        db.Administrator
            .findByIdAndRemove(req.params.id)
            .then(() => res.json({message: "Customer Removed"}))
            .catch(err => res.status(422).json(err));
    }
}