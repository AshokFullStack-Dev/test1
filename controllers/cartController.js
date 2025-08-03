const pool = require("../config/db");

exports.getCartItems = async (req, res) => {
  const [rows] = await pool.query(`
    SELECT c.id, p.id AS product_id, p.name, p.price, p.image, c.quantity
    FROM cart c JOIN product p ON c.product_id = p.id
  `);
  res.json(rows);
};

exports.addToCart = async (req, res) => {
  const { product_id, quantity } = req.body;
  await pool.query(
    "INSERT INTO cart (product_id, quantity) VALUES (?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?",
    [product_id, quantity || 1, quantity || 1]
  );
  res.json({ message: "Added/updated" });
};

exports.updateCartItem = async (req, res) => {
  const { quantity } = req.body;
  const { id } = req.params;
  await pool.query("UPDATE cart SET quantity = ? WHERE id = ?", [quantity, id]);
  res.json({ message: "Quantity updated" });
};

exports.deleteCartItem = async (req, res) => {
  await pool.query("DELETE FROM cart WHERE id = ?", [req.params.id]);
  res.json({ message: "Removed" });
};
