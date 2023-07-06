const express = require("express");
const router = express.Router();
const product = require("./models/product");
const { Sequelize, Op, fn, col } = require("sequelize");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");
const constants = require("./constant");
const { firstValues } = require("formidable/src/helpers/firstValues.js");

router.get("/product", async (req, res) => {
  const result = await product.findAll({ order: Sequelize.literal("id DESC") });
  res.json(result);
});

// Upload Image
const uploadImage = async (files, doc) => {
  if (files.image != null) {
    var fileExtention = files.image.originalFilename.split(".")[1];
    doc.image = `${doc.id}.${fileExtention}`;
    var newpath =
      path.resolve(__dirname + "/uploaded/images/") + "/" + doc.image;
    console.log(newpath);

    if (fs.exists(newpath)) {
      await fs.remove(newpath);
    }
    await fs.moveSync(files.image.filepath, newpath);

    // Update database
    let result = product.update(
      { image: doc.image },
      { where: { id: doc.id } }
    );
    return result;
  }
};

// ADD
router.post("/product", async (req, res) => {
  try {
    const form = new formidable.IncomingForm();

    const [_fields, _files] = await form.parse(req);
    const fields = firstValues(form, _fields);
    const files = firstValues(form, _files);
    let result = await product.create(fields);
    result = await uploadImage(files, result);
    res.json({
      result: constants.kResultOk,
      message: JSON.stringify(result),
    });
  } catch (error) {
    console.log(error);
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
});

// UPDATE
router.put("/product", async (req, res) => {
  try {
    const form = new formidable.IncomingForm();

    const [_fields, _files] = await form.parse(req);
    const fields = firstValues(form, _fields);
    const files = firstValues(form, _files);
    let result = await product.update(fields, {
      where: { id: fields.id },
    });
    result = await uploadImage(files, fields);
    res.json({
      result: constants.kResultOk,
      message: JSON.stringify(result),
    });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
});

// DELETE
router.delete("/product/id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let result = await product.findOne({ where: { id } });
    await fs.remove(__dirname + "/uploaded/images/" + result.image);
    result = await product.destroy({ where: { id: id } });
    res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
  } catch (err) {
    console.log(err);
    res.json({ result: constants.kResultNok, message: JSON.stringify(err) });
  }
});

// GET BY ID
router.get("/product/id/:id", async (req, res) => {
  try {
    let result = await product.findOne({ where: { id: req.params.id } });
    if (result) {
      res.json(result);
    } else {
      res.json({});
    }
  } catch (error) {
    res.json({});
  }
});

// GET BY KEYWORD (ARRAY)
router.get("/product/name/:keyword", async (req, res) => {
  console.log("get products by keyword");
  try {
    let keyword = req.params.keyword;
    const result = await product.findAll({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        "LIKE",
        `%${keyword.toLowerCase()}%`
      ),
    });
    if (result) {
      res.json(result);
    } else {
      res.json([]);
    }
  } catch (error) {
    console.log(error);
    res.json([]);
  }
});

module.exports = router;
