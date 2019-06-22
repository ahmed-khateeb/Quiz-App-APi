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

//Use Angular Builded Part 
server.use(express.static(path.join(__dirname,"dist")));

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

server.use("/api/user", userRoutes);

server.use("/api/quiz", quizRoutes);
server.use("/api/questions", questionRouter);
server.use("/api/answers", answerRouter);
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

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen(process.env.PORT || 8000,()=>{
    console.log("I am Listening ......");
});