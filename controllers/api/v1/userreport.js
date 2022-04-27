const StoreReport = require("../../../models/storereport");
const PostReport = require("../../../models/postreports");
module.exports.createpost = async function (req, res) {
  const {
    userID,
    marketID,
    marketName,
    cmdtyID,
    marketType,
    cmdtyName,
    priceUnit,
    convFctr,
    price,
  } = req.body.reportDetails;
  try {
    let savedpost = await PostReport.create({
      userID,
      marketID,
      marketName,
      cmdtyID,
      marketType,
      cmdtyName,
      priceUnit,
      convFctr,
      price,
    });
    console.log(savedpost);
    const report = await StoreReport.find({
      marketID: marketID,
      cmdtyID: cmdtyID,
    });
    let Reports;
    let reportid;
    if (report.length > 0) {
      //update the data;
      const id = report[0]._id;
      reportid = id;
      let prevprice = report[0].price;
      let len = report[0].users.length;
      let ppkg = price / convFctr;
      let totalprice = (ppkg + prevprice) / (len + 1);
      Reports = await StoreReport.updateOne(
        { _id: id },
        {
          $push: { users: userID },
          $set: {
            price: totalprice,
          },
        }
      );
    } else {
      // store the data
      
      let ppkg = price / convFctr;
      Reports = await StoreReport.create({
        marketID,
        marketName,
        cmdtyID,
        cmdtyName,
        users: userID,
        price: ppkg,
        priceUnit: "KG",
      });
      reportid = Reports._id;
    }
    
    return res.status(200).json({
      status: "success",
      reportID: reportid,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR CREATING post",
      error,
    });
  }
};
exports.getReport = async (req, res) => {
  try {
    const report = await StoreReport.findById(req.query.reportID);
    res.status(200).json({
      report,
    });
  } catch (error) {
    res.status(400).json({
      message: "ERROR FROM GET SINGLE ORDER",
    });
  }
};
