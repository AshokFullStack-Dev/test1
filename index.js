const express = require("express");
const cors = require("cors");
const app = express();

// Route files
const booksRoutes = require("./routes/books");
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const authRoutes = require("./routes/auth");

// Middleware
app.use(cors()); //Cross-Origin Resource Sharing
app.use(express.json());

// Route mounting
app.use("/books", booksRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);

//   basic route for browser test
app.get("/", (req, res) => {
  res.send("🟢 API server is running on port 4000");
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
