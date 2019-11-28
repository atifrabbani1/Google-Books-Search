const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .post(booksController.create);

router.route("/saved")
  .get(booksController.findAll)

// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;
