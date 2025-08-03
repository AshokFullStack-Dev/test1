const pool = require("../config/db");
exports.getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM product");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "DB error" });
  }
};
