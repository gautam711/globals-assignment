import mongoose from "mongoose";
import { Connection } from "mongoose";
import loggerService from "../service/logger.service";

const dbURI: string = "mongodb+srv://testbuddy:YbvUebgULmYJlSsc@test-buddy.csolk4l.mongodb.net/globals?retryWrites=true&w=majority";

export const _mongoInstance: Connection = mongoose.createConnection(dbURI, {
  retryWrites: false,
  bufferCommands: true,
  readPreference: "primaryPreferred",
});

// CONNECTION EVENTS

// When successfully connected
_mongoInstance.on("connected", function () {
  loggerService.info("Mongoose connection open to master DB");
});

// If the connection throws an error
_mongoInstance.on("error", function (err) {
  loggerService.error("Mongoose connection error for master DB: " + err);
});

// When the connection is disconnected
_mongoInstance.on("disconnected", function () {
  loggerService.info("Mongoose connection disconnected for master DB");
});

//When connection is reconnected
_mongoInstance.on("reconnected", function () {
  loggerService.info("Mongoose connection open to master DB");
});
