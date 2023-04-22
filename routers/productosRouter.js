const { Router } = require("express");

const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
  getAllProductsByCategory
} = require("../controller/productosController");

const productosRouter = Router();

productosRouter.get(`/`, getAllProducts);
productosRouter.get(`/:id`, getProductById);
productosRouter.post(`/`, addProduct);
productosRouter.put(`/:id`, updateProductById);
productosRouter.delete(`/:id`, deleteProductById);
productosRouter.get('/category/:category', getAllProductsByCategory);

module.exports = productosRouter;