import { Document } from "mongoose";
import { _mongoInstance } from "../connections/db";
import { Schema } from "mongoose";

export interface Image extends Document {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const ImageSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  download_url: {
    type: String,
    required: true,
  },
});

const ImageModel = _mongoInstance.model("Image", ImageSchema);
export default ImageModel;
