import express from "express";
import morgan from "morgan";

import tutorialRoutes from "./routes/tutorial.routes.js";

const app = express();

//Middleware que registra las solicitudes HTTP que se realizan y las muestra por consola
app.use(morgan('dev'));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bienvenid@ a mi REST API... Creado por: Cristian David Espitia Vanegas")
});

app.use("/api", tutorialRoutes);

export default app;