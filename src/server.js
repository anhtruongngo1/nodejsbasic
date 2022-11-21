import express from "express";
import bodyParser from "body-parser";
import initWebRoutes from "./route/web"
import connectDB from "./config/connectDB"
import cors from 'cors'
require('dotenv').config();

const app = express();
app.use(cors({origin:true}))


// config app

app.use(bodyParser.json({limit : '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));




initWebRoutes(app);
connectDB()

let port = process.env.PORT || 8080 ;
app.listen(port , () => {
    console.log('backend is running port' + port);
});