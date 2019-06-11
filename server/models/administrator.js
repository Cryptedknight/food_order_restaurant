const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    adminName: {
        type: String, 
        required: [true, "Please provide your Full Name"]
    },
    adminPhone: {
        type: String, 
        required: false,
        match: [/\d{3}-\d{3}-\d{4}/, "Please provide a phone number."]
    },
    adminEmail: {
        type: String, 
        required: [true, "Please provide your email."],
        unique: true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email."]
    },
    restaurants: [{
        type: Schema.Types.ObjectId,
        ref: "Restaurants"
    }]
});
const Administrator = mongoose.model("Administrator", adminSchema);

module.exports = Administrator;