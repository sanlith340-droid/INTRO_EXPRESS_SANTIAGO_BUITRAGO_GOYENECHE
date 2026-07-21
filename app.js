import express from "express"; //ES
//import {configDotenv} from "dotenv"
//configDotenv()
//const express = require("express")//CJS
import "dotenv/config"

const app = express()
const puerto = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hola  3407180 del SENA")
})

app.listen(puerto,()=>{
    console.log(`Servidor funcionando en el puerto ${puerto}!!`);
})



app.get("/saludo",(req,res)=>{
    res.send(`<h3> Hola Gente de YouTube soy el Loquendero340 y hoy vamos hablar de python XDXD</h3>${mivar}`)
})

app.listen(puerto,()=>{
    console.log(`Servidor htpp://localhost:${puerto}
        htpp://localhost:3030${puerto}`);
})