const express = require('express');
const { default: mongoose } = require('mongoose');
const userRoutes = require("./routes/userRoutes");
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.json()); 
app.use("/user", userRoutes);


// mongoose.connect("mongodb://localhost:27017/authDB")
//     .then(() => {
//         console.log("Database is connected");
//     })
//     .catch((err) => {
//         console.error("Error connecting to the database:", err);
//     })

app.get('/', (req, res) => {
    res.send({message: "Welcome"})
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
