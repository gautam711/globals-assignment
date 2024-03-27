// import { config } from '../config';
import mongoose from "mongoose";
import { Connection } from "mongoose";

// const dbURI: string =
//   "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const dbURI: string = "mongodb+srv://testbuddy:YbvUebgULmYJlSsc@test-buddy.csolk4l.mongodb.net/globals?retryWrites=true&w=majority";

export const _mongoInstance: Connection = mongoose.createConnection(dbURI, {
  retryWrites: false,
  bufferCommands: true,
  readPreference: "primaryPreferred",
});

// CONNECTION EVENTS

// When successfully connected
_mongoInstance.on("connected", function () {
  console.log("Mongoose connection open to master DB");
});

// If the connection throws an error
_mongoInstance.on("error", function (err) {
  console.log("Mongoose connection error for master DB: " + err);
});

// When the connection is disconnected
_mongoInstance.on("disconnected", function () {
  console.log("Mongoose connection disconnected for master DB");
});

//When connection is reconnected
_mongoInstance.on("reconnected", function () {
  console.log("Mongoose connection open to master DB");
});
