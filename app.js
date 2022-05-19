const express = require("express");

const app = express(); 
const mainRouter = require("./routes/")


app.use(express.static("public"));
app.set("view engine", "ejs");

app.use('/', mainRouter)

app.listen(3030, () => {
    console.log("Example app listening port on port 3030");
})