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

// create new category
router.post("/", (req, res) => {
  /* req.body should look like this...
    	{
		    "category_name": "Fruits"
	    }
  */
  Category.create(req.body)
    .then((category) => {
      // if there's category tags, we need to create pairings to bulk create in the ProductTag model
      // if no category tags, just respond
      res.status(200).json(category);
    })
    .then((categoryTagIds) => res.status(200).json(categoryTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update category
router.put("/:id", (req, res) => {
  // update category data
  Category.update(req.body, {
    where: {
      category_id: req.params.id,
    },
  })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one category by its `id` value
  Category.destroy({ where: { category_id: req.params.id } })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
