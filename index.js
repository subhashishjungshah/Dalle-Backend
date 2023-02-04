import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectdb from "./mongodb/connect.js";
import postroutes from "./Routes/postroutes.js";
import dalleroutes from "./Routes/dalleroutes.js";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use("/api/v1/posts", postroutes);
app.use("/api/v1/dalle", dalleroutes);
app.get("/", async (req, res) => {
  res.send("Hello subhashish from dale server");
});

const startserver = async () => {
  try {
    await connectdb(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log("Server has started on port 8080");
    });
  } catch (error) {
    console.log(error);
  }
};
startserver();
