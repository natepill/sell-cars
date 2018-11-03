const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    carOwnership: String,
    parkingBoolean: String,
    parkingPayment: Number,
    insuranceBoolean: String,
    parkingBoolean: String,
    insurancePayment: Number,
    powerBoolean: String,
    powerPayment: Number,
    workBoolean: String,
    carWorkBoolean: String,
    workMiles: Number,
    vacationBoolean: String,
    vacationFrequency: Number,
    vacationMiles: Number
});

module.exports = mongoose.model("Survey", SurveySchema);
