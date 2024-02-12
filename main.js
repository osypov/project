const express = require("express");
const csv = require("csv-string");
const fs = require("fs");
const app = express();


app.set("views", __dirname+"/views")
app.engine("html", require("ejs").renderFile)

app.get("/get_file", (req, res) => {
    const file = `${__dirname}/Meine Famillie.pdf`

    try {
        let ip = req.headers["x-forwarded-for"] || req.socket.remoteAdress

        if(!ip) ip = "empty";

        const str = csv.stringify([ip, new Date().toUTCString()])

        // console.log("ip", ip)
        // console.log("str", str)
        fs.appendFileSync("ips.csv", str)
        
    } catch(e) {
        console.log("e", e)
    }
    
    res.download(file)

    res.render("get_file.html")
})


app.listen(8080, )
