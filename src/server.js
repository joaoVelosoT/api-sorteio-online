// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();

// const express = require("express");
import express from "express";
// const database = require("./config/database");
import database from "./config/database.js";
const app = express();
const port = process.env.PORT || 8020;
// const router = require("./routers/router");
import router from "./routers/router.js";
// const swaggerUI = require("swagger-ui-express");
import swaggerUI from "swagger-ui-express";
// const swaggerDocs = require("../swagger.json");
import swaggerDocs from "../swagger.json" assert { type: "json" };
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use("/", router);

app.listen(port, async () => {
  try {
    // Conectando no banco de dados
    await database();
  } catch (error) {
    console.error("Erro ao tentar conectar no banco de dados");
    console.error(error);
  }
  console.log("=======================================================");
  console.log(`Servidor rodando na porta ${port}`);
  console.log("=======================================================");
});
