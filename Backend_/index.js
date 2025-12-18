
const ProductRoute = require("./routes/ProductRoute");

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const cors = require("cors");
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api", ProductRoute);
const PORT = process.env.PORT;


app.get("/", (req, res) => {
    res.send(`welcome to  Paarvendhan M.R server`);
});
app.get("/about", (req, res) => {
    res.send("Watashi wa guru desu ");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})