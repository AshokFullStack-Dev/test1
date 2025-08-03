const {
  getCartItems,
  addToCart,
  updateCartItem,
  deleteCartItem,
} = require("../controllers/cartController");
const router = require("express").Router();
router.get("/", getCartItems);
router.post("/", addToCart);
router.put("/:id", updateCartItem);
router.delete("/:id", deleteCartItem);
module.exports = router;
