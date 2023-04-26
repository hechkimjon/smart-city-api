const express = require("express")
const app = express()
const newsRoutes = require("./routes/news")
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://smartbase:4VE5ZfTRPyaQHJux@smartbase.yvauzfh.mongodb.net/smartbase")


mongoose.connection.on("connected", () => {
    console.log("Mongodb ")
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/news", newsRoutes)


app.listen(5001, () => {
    console.log("Server has been started on 5001 port")
})