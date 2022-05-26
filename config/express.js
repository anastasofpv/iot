const path = require("path"),
    express = require("express"),
    morgan = require("morgan"),
    routes = require("../routes/routes"),
    thermal_api = require("../routes/thermal_api"),
    map_api = require("../routes/map_api"),
    cors = require("cors");

module.exports.init = () => {
    //initialize app
    const app = express();

    app.use(cors());

    //morgan used for logging HTTP requests to the console
    // app.use(morgan("dev"));

    //Body Parser Middleware
    app.use(express.json());


    //add routers
    app.use("/index.html", routes);

    app.use("/api/thermal", thermal_api)

    app.use("/api/map", map_api)

    // Set static folder
    app.use(express.static(path.join(__dirname,'../public')));


    return app;
};
