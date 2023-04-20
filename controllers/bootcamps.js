//@desc  Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Get all bootcamps" });
};

//@desc  Get all bootcamps
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getSingleBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Get all bootcamps" });
};

//@desc  Get all bootcamps
//@route POST /api/v1/bootcamps/
//@access Public
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create bootcamp" });
};

//@desc  Get all bootcamps
//@route PUT /api/v1/bootcamps/:id
//@access Public
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update bootcamp" });
};

//@desc  Get all bootcamps
//@route DELETE /api/v1/bootcamps/:id
//@access Public
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete bootcamp" });
};
