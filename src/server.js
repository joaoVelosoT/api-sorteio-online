require("dotenv").config();
const express = require("express");
const database = require("./config/database");
const app = express();
const port = process.env.PORT || 8020;
const router = require("./routers/router");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("../swagger.json");

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
