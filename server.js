const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const hbs = require("express-handlebars");
const methodOverride = require("method-override");
const morgan = require("morgan");

//SET UP MONGOOSE
const mongoose = require("mongoose");

// Port
const port = process.env.PORT || 3000;

//middleware
app.use(methodOverride("_method"));
// Use Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));


// static files middleware
app.use(express.static("public"));

// Set the view engine and file extension
app.engine("hbs", hbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");



// Mongoose Connection
const mongoUri =
    process.env.MONGODB_URI || "mongodb://localhost:27017/sellcars";
mongoose.connect(
    mongoUri,
    { useNewUrlParser: true }
);

//index page
app.get("/", (req, res) => {
    res.send("here");
});

//404 page
app.get("*", (req, res) => {
    res.send("error");
});

app.listen(port, () => {
    console.log("listening");
});

module.exports = app;
