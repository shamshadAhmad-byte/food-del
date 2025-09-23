import cloudinary from "../config/clooudinary.js";
const uploadsToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file);
    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("Error while uploading to cloudinary", error);
    throw new Error("Error while uploading to cloudinary");
  }
};
export default uploadsToCloudinary;
