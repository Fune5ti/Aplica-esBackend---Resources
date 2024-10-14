const getAuthors = async (req, res) => {
  res.json("/authors");
};
const getAuthorById = async (req, res) => {
  const { authorId } = req.params;
  res.json("/authors/" + authorId);
};

module.exports = {
  getAuthors,
  getAuthorById,
};
