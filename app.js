import express from "express"; //ES
import {configDotenv} from "dotenv"
configDotenv()
//const express = require("express")//CJS
const app = express()
const puerto = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hola ficha 3407180 del SENA")
})

app.listen(puerto,()=>{
    console.log(`Servidor funcionando en el puerto ${puerto}!!`);
})