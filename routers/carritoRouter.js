const { Router } = require("express");

const {
  getAllProductsByIdCart,
  createCart,
  viewCart,
  addProductToCart,
  deleteCartById,
  deleteProductById,
} = require("../controller/carritoController");

const carritoRouter = Router();
carritoRouter.get(`/:id/productos`, getAllProductsByIdCart);
carritoRouter.get(`/`, viewCart);
carritoRouter.post(`/`, createCart);
carritoRouter.post(`/addProduct`, addProductToCart);
carritoRouter.post(`/deleteProduct`, deleteProductById);

carritoRouter.delete(`/:id`, deleteCartById);


module.exports = carritoRouter;



