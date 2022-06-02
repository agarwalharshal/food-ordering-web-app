//jshint esversion:7

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/foodOrderDB");

const dishSchema = new mongoose.Schema({
	ingredients: [String],
	time: Number,
});

const Dish = mongoose.model("Dish", dishSchema);

const curdRice = new Dish({
	ingredients: ["curd", "rice", "sugar"],
	time: 15,
});

app.get("/", function (req, res) {
	// Dish.insertOne(curdRice, function (err, result) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log("Inserted");
	// 	}
	// });
});

app.listen(3000, () => console.log("Server started on port 3000"));
