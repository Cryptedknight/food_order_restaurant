const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        if (req.query) {
            db.Dish
                .find()
                .then(dbDish => res.json(dbDish))
                .catch(err => res.status(422).json(err));
        } else {
            db.Dish
                .find()
                .then(dbDish => res.json(dbDish))
                .catch(err => res.status(422).json(err));
        }
    },
    findById: (req, res) => {
        db.Dish
            .findById(req.params.id)
            .then(dbDish => res.json(dbDish))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        //req.params.id refers to restaurant id
        db.Dish
            .create(req.body)
            .then(dbDish => {
                const dishId = dbDish._id;
                 return db.Restaurant
                            .findByIdAndUpdate(req.params.id,{$push: {dishes: dishId}});
            })
            .then(dbRestaurant => res.json({message: "Dish added to Menu"}))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Dish
            .findByIdAndUpdate(req.params.id, req.body)
            .then(dbDish => res.json(dbDish))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Dish
            .findByIdAndRemove(req.params.id)
            .then(() => res.json({message: "Restaurant deleted"}))
            .catch(err => res.status(422).json(err));
    }
};