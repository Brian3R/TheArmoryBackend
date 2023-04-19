// import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const testRoutes = require('./routes/test');

require("dotenv").config();


const path = require('path');
const server = express();

//app

server.use(express.static("public"))
server.use(express.json())
server.use(express.urlencoded({extended: true}))

//db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (() => {
    server.listen(port, () => console.log(`server is running on port ${port} and DB is Connected`));
})
.catch((err) => console.log('DB CONNECTION ERROR', err));

// middleware
server.use(express.json())

server.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})
server.use(morgan("dev"));
server.use(cors({origin: true, credentials: true}));

//routes
server.use(express.static(path.join(__dirname, 'build')));

server.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
server.get('/', (req,res) =>{
    res.json({mssg: 'Welcome guys'})
})

server.use("/api/test", testRoutes);
 



//port
const port = process.env.PORT || 8080;

//listener
//const server = app.listen(port, () => console.log(`server is running on port ${port}`));