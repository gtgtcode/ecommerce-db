const router = require("express").Router();
const mysql = require("mysql2");
const { find } = require("mysql2/lib/constants/charset_encodings");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  async function findAllCategory() {
    const category = await Category.findAll();
    res.send(category);
  }
  findAllCategory();
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  async function findOneCategory() {
    const category = await Category.findByPk(req.params.id);
    res.send(category);
  }
  findOneCategory();
});

router.post("/", (req, res) => {
  console.log("test");
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
