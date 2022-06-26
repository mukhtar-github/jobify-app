import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Please provide company name"],
    maxlength: 20,
  },

  company: {
    type: String,
    required: [true, "Please provide company name"],
    maxlength: 20,
  },
});
