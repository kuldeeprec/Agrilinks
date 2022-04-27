const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    marketID: {
      type: String,
    },
    marketName: {
      type: String,
      required: true,
    },
    cmdtyID: {
      type: String,
      required: true,
    },
    marketType: {
      type: String,
    },
    cmdtyName: {
      type: String,
      required: true,
    },
    priceUnit: {
      type: String,
      required: true,
    },
    convFctr: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Report = mongoose.model("Report", ReportSchema);
module.exports = Report;
