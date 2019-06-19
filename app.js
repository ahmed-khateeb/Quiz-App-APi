const express = require("express"),
    path = require("path"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    mongoose = require("mongoose"),
    // Routes
    userRoutes = require("./routes/userRoutes"),
    quizRoutes = require("./routes/quizRoutes"),
    questionRouter = require("./routes/questionRoutes"),
    answerRouter = require("./routes/answerRoutes"),

    authenticate = require("./middleware/jwt");
    server = express();

    mongoose.connect(
        //"mongodb://localhost:27017/3D_Quiz",
        "mongodb+srv://ahmad:123_456@cluster0-zcfdh.mongodb.net/test?retryWrites=true&w=majority",
        { useNewUrlParser: true },
        error => {
            if (error) {
                console.log("DB Connection Error " + error);
            }
        }
    );
mongoose.set('useCreateIndex', true);

server.use(morgan("short"));
server.use(cors({ origin: true }));
server.use(bodyParser.json());

server.use("/user", userRoutes);


// Authentication midleware
server.use(authenticate);


server.use("/quiz", quizRoutes);
server.use("/questions", questionRouter);
server.use("/answers", answerRouter);
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