const express = require("express");

const app = express(); 
const mainRouter = require("./routes/")


app.use(express.static("public"));
app.set("view engine", "ejs");

app.use('/', mainRouter)

app.listen(process.env.PORT || 3030, () => {
    console.log("Sevidor corriendo en http://localhost:3030");
})
