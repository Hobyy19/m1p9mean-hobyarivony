var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var database;

var USER_COLLECTION = "user";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Local database URI.
const LOCAL_DATABASE = "mongodb://localhost:27017/e-kaly";
// Local port.
const LOCAL_PORT = 8080;

// Init the server
mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_DATABASE,
{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, function (error, client) {
    // Check if there are any problems with the connection to MongoDB database.
    if (error) {
        console.log(error);
        process.exit(1);
    }
    // Save database object from the callback for reuse.
    database = client.db();
    console.log("Database connection done.");
    // Initialize the app.
    var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});

/*  "/api/user/add"
 *   POST: creates a new user
 */
app.post("/api/user/add", function (req, res) {
    var user = req.body;

    if (!user.email) {
        manageError(res, "Invalid input", "Email is mandatory.", 400);
    } else if (!user.password) {
        manageError(res, "Invalid input", "Password is mandatory.", 400);
    } else {
        database.collection(USER_COLLECTION).insertOne(user, function (err, doc) {
            if (err) {
                manageError(res, err.message, "Failed to create new product.");
            } else {
                res.status(201).json(doc.ops[0]);
            }
        });
    }
});