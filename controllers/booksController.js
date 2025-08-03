exports.getAllBooks = (req, res) => {
  res.json([
    { id: 1, title: "Book One" },
    { id: 2, title: "Book Two" },
  ]);
};

exports.addBook = (req, res) => {
  const newBook = req.body;
  res.status(201).json({ message: "Book added", book: newBook });
};
