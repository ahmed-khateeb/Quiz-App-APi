const express = require("express"),
    path = require("path"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    mongoose = require("mongoose"),
    userRoutes = require("./routes/userRoutes"),

    authenticate = require("./middleware/jwt");
    server = express();

mongoose.connect(
    "mongodb://localhost:27017/3D_Quiz",
    { useNewUrlParser: true })
    .then(() => { // if all is ok we will be here

    })
    .catch(err => { // we will not be here...
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

server.use(morgan("short"));
server.use(cors({ origin: true }));
server.use(bodyParser.json());

server.use("/user", userRoutes);


// Authentication midleware
server.use(authenticate);

server.use((err, req, res, next) => {
    console.log(err);
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else
        res.status(422).send(err)
});

server.listen(process.env.PORT || 8000,()=>{
    console.log("I am Listening ......");
});