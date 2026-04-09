import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  dateSubmitted: { type: Date, required: true },
  status: {
    type: String,
    enum: ["submitted", "interviewing", "offered", "rejected"],
    default: "submitted",
    required: true,
  },
  type: {
    type: String,
    enum: ["full-time", "part-time", "internship", "contract", "other"],
  },
  mode: {
    type: String,
    enum: ["on-site", "hybrid", "remote"],
  },
  usesHourlyPay: Boolean,
  minPay: Number,
  maxPay: Number,
  link: String,
});

const Application = new mongoose.Model("Application", applicationSchema);

export default Application;
