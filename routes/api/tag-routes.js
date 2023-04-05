const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Products
  async function findAllTags() {
    const tags = await Tag.findAll();
    res.send(tags);
  }
  findAllTags();
});

router.get("/:id", (req, res) => {
  // find one tags by its `id` value
  // be sure to include its associated Products
  async function findOneTags() {
    const tags = await Tag.findByPk(req.params.id);
    res.send(tags);
  }
  findOneTags();
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => {
      res.send(tag);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    { tag_name: req.body.tag_name },
    {
      where: {
        tag_id: req.params.id,
      },
    }
  )
    .then((tag) => {
      res.send(tag);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one tag by its `id` value
  Tag.destroy({
    where: {
      tag_id: req.params.id,
    },
  })
    .then(() => {
      res.send("Tag successfully deleted");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
