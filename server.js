require("dotenv").config()
const express = require("express")
const app = express()

const PORT = process.env.PORT||3001

const movieRoutes = require("./routes/movieRoutes")

// MIddleWare

app.use(express.json());
app.use(express.urlencoded());

// Routes

app.get("/", (req, res)=>{
    res.send("<h1>Movie Finder API is running</h1>")
})

app.use("/api", movieRoutes)

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})