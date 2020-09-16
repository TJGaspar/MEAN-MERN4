import express from "express";
import routes from "./src/routes/ticketRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const cors = require("cors");

const app = express();


app.use(cors());

const PORT = 3000;

//mongoose connection (connection between mongo and the API)
mongoose.Promise = global.Promise; //Waits for a response from Mongo
mongoose.connect("mongodb://localhost/PROJdb", {
	//The db used for this API
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
})
.then(()=>{
	console.log("connected to database");
})
.catch(err =>{
	console.log("cannot connect to database", err);
	process.exit();
});


// bodyparser setup
//app.use(bodyParser.text());
app.use(cors());
// parse requests of content type - x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//parse requests of content type -json
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) =>
	res.send(`Node and express server running on port ${PORT}`)
);
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

