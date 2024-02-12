const csv = require("csv-string");
const fs = require("fs");


content = csv.stringify(["ip", "time"])

console.log(content)

fs.writeFileSync("ips.csv", content)

