const express = require("express");

const router = express.Router();

const {
  getBootcamps,
  getSingleBootcamp,
  updateBootcamp,
  createBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getSingleBootcamp)
  .delete(deleteBootcamp)
  .put(updateBootcamp);

module.exports = router;
