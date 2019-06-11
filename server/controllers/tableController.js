const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        if (req.query) {
            db.Table
                .find()
                .then(dbTable => res.json(dbTable))
                .catch(err => res.status(422).json(err));
        } else {
            db.Table
                .find()
                .then(dbTable => res.json(dbTable))
                .catch(err => res.status(422).json(err));
        }
    },
    findById: (req, res) => {
        db.Table
            .findById(req.params.id)
            .then(dbTable => res.json(dbTable))
            .catch(err => res.status(422).json(err));
    },
    createTables: (req, res) => {
        if (req.body.numTables) {
            //req.params.id refers to Restaurant id
            // req.body => {numTables: Number}, recursive function to create all of the tables at once
            const { numTables } = req.body;
            let i = 0;
            createTable();

            function createTable() {
                if (i < numTables) {
                    db.Table
                        .create({tableNum: `Table ${i + 1}`})
                        .then(dbTable => {
                            const tableId = dbTable._id;
                            return db.Restaurant
                                .findByIdAndUpdate(req.params.id, {$push: {tables: tableId}})
                        })
                        .then(dbTable => {
                            res.json({message: "Table created."});
                            i++;
                            createTable();
                        })
                        .catch(err => res.status(422).json(err));
                }
            }
        } else {
            db.Table
                .create({tableNum: req.body.tableNum})
                .then(dbTable => {
                    const tableId = dbTable._id;
                    return db.Restaurant
                            .findByIdAndUpdate(req.params.id, {$push: {tables: tableId}})
                })
                .then(dbTable => res.json({message: "Table created."}))
                .catch(err => res.status(422).json(err));
        }
    },
    updateTable: (req, res) => {
        //req.params.id refers to tableId
        if (req.body.occupied) {
            //addTableOccupant
            db.Table
                .findByIdAndUpdate(req.params.id, {
                    occupied: req.body.occupied,
                    occupiedBy: req.body.customerId,
                    timeOccupied: Date.now
                })
                .then(dbTable => res.json(dbTable))
                .catch(err => res.status(422).json(err));
        } else if (req.body.section) {
            const { section } = req.body
            db.Table
                .findByIdAndUpdate(req.params.id, {section})
                .then(dbTable => res.json(dbTable))
                .catch(err => res.status(422).json(err));
        } else if (!req.body.occupied) {
            db.Table
                .findByIdAndUpdate(req.params.id, {$unset: { occupiedBy: "", timeOccupied: ""}, $set: {occupied: false}})
                .then(dbTable => res.json(dbTable))
                .catch(err => res.status(422).json(err));
        }
    },
    removeTable: (req, res) => {
        db.Table
            .findByIdAndRemove(req.params.id)
            .then(() => res.json({message: "Table removed"}))
            .catch(err => res.status(422).json(err));
    }
}