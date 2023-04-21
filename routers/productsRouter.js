const { Router } = require("express");

const { getForm } = require(`../controller/productsController`);

const productsRouter = Router();

productsRouter.get(`/`, getForm);
productsRouter.get('/:category', (req, res) => {
    const category = req.params.category;
    // get all products by category

    res.render('productsByCategory', { category: category });
  });
module.exports = productsRouter;