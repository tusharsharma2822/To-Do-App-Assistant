import express from "express";
import "dotenv/config.js";
import cors from "cors";
import morgan from "morgan";
import connectToDB from "./db/db.js";

connectToDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(morgan('dev'));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

export default app;