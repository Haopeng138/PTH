require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();

const cors = require("cors");
const http = require("http");

app.use(cors());
app.use(express.json());

const basicRouter = require("./routers/basicRouter");

app.use("/api", basicRouter);

const port = process.env.PORT || 8080;
const httpServer = http.createServer(app);

httpServer.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
);
