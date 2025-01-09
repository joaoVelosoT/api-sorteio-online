// const mongoose = require("mongoose");
import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const url = "mongodb://localhost:27017/sorteioonline";
    await mongoose.connect(url);
    console.log("=======================================================");

    console.log("Banco de dados conectado com sucesso");
  } catch (error) {
    console.log("Erro ao conectar no bando de dados");
    console.error(error);
  }
};

export default connectDatabase;
// module.exports = connectDatabase;
