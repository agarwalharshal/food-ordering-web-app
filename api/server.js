//jshint esversion:7
const products = require("./ingredientsTimeList");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "public")));

mongoose.connect("mongodb://localhost:27017/foodOrderDB");

const dishSchema = new mongoose.Schema({
	key: Number,
	ingredients: [String],
	cookingTime: Number,
});

const Dish = mongoose.model("Dish", dishSchema);

const orderSchema = new mongoose.Schema({
	recipeID: [Number],
	ingredients: [String],
	cookingTime: Number,
});
// the default document _id can be used as order IDs

const Order = mongoose.model("Order", orderSchema);

app.get("/", function (req, res) {
	Dish.find({}, function (err, items) {
		if (err) {
			console.log(err);
		} else {
			if (items.length === 0) {
				Dish.insertMany(products, function (err) {
					if (err) {
						console.log(err);
					} else {
						console.log("Inserted");
					}
				});
				res.redirect("/");
			} else {
				res.sendFile(__dirname + "");
			}
		}
	});
});

app.post("/", function (req, res) {
	const cartItems = req.body.placeOrder;
	var recipeIDs = [];
	var ingredients = [];
	var cookingTime = 0;
	cartItems.forEach((item) => {
		recipeIDs.push(item.key);
		products.forEach((product) => {
			if (item.key === product.key) {
				ingredients.push(...product.ingredients);
				cookingTime = cookingTime + product.cookingTime;
			}
		});
	});
	Order.insertOne(
		{
			recipeID: recipeIDs,
			ingredients: ingredients,
			cookingTime: cookingTime,
		},
		function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("Order Placed");
			}
		}
	);
});

app.listen(8000, () => console.log("Server started on port 8000"));
