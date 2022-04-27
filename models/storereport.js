const mongoose = require("mongoose");

const storeReportSchema = new mongoose.Schema(
  {
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
    cmdtyName: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
    priceUnit: {
      type: String,
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
const StoreReport = mongoose.model("StoreReport", storeReportSchema);
module.exports = StoreReport;
