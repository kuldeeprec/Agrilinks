# Agrilinks
# storing data
# url
localhost:8000/api/v1/reports/post
# data format json
"reportDetails": {
    "userID": "user-1",
    "marketID": "market-1",
    "marketName": "Vashi Navi Mumbai",
    "cmdtyID": "cmdty-1",
    "marketType": "Mandi",
    "cmdtyName": "Potato",
    "priceUnit": "Pack",
    "convFctr": 50,
    "price": 700
  }
}
# validating and api get data
# url 
localhost:8000/api/v1/reports/?reportID=6269aed454c13144116f5ec0
# you can verify through postman
