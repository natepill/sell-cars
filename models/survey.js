const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    carOwnership: String,
    parkingBoolean: String,
    parkingPayment: Number,
    insuranceBoolean: String,
    insurancePayment: Number,
    powerBoolean: String,
    powerPayment: Number,
    workBoolean: String,
    carWorkBoolean: String,
    workMiles: Number,
    vacationBoolean: String,
    vacationFrequency: Number,
    vacationMiles: Number,
    surveyDate: { type: Date, default: 2018 }
});

module.exports = mongoose.model("Survey", SurveySchema);
