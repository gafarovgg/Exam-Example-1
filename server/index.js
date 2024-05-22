const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Base_URL =
  "mongodb+srv://gafarovgg:azmp101@cluster0.tgpivyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const CourseSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  imageUrl: { type: String, require: true },
});

const CourseModel = mongoose.model("CourseModel", CourseSchema);
const bodyParser = require("body-parser");
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get("/api/products", async (req, res) => {
  try {
    const products = await CourseModel.find({});
    if (products.length > 0) {
      res.status(200).send({ message: "success", data: products });
    } else {
      res.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await CourseModel.findById(id);
    if (product) {
      res.status(200).send({ message: "success", data: product });
    } else {
      res.status(404).send({ message: "not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await CourseModel.findByIdAndDelete(id);
    res
      .status(200)
      .send({ message: "deleted successfully", data: deletedProduct });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/api/products", async (req, res) => {
  try {
    const newProduct = new CourseModel({ ...req.body });
    await newProduct.save();
    res.status(201).send({ message: "posted successfully", data: newProduct });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(Base_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
