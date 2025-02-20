const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "post_pics",
    format: async (req, file) => file.mimetype.split("/")[1],

    // allowed_formats: ["jpeg", "png", "jpg"], // ⚠️ Remove this
  },
});

const multerObj = multer({ storage: storage });

module.exports = multerObj;
