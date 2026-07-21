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


//ENPOINTS//

app.get("/saludo/:ficha", (req, res) => {
    const ficha = req.params.ficha;

    res.send(`<h3>Hola Gente de YouTube</h3>
              <p>La ficha es: ${ficha}</p>`);
});


app.listen(puerto,()=>{
    console.log(`Servidor htpp://localhost:${puerto}
        htpp://localhost:3030${puerto}`);
})

app.get("/clientes/:id",(req,res)=>{
    const id = req.params.id
    res.send(`<h3> Soy cliente </h3>${id}`)
})
