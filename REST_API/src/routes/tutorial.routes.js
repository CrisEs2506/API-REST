import { Router } from "express";
import { createTutorial, getTutoriales, getTutorial, updateTutorial, deleteTutorial } from "../controllers/tutorial.controller.js";

const router = Router();

//Endpoints 
//CRUD: Create
router.post('/crearTutorial', createTutorial);

//CRUD: Read All
router.get('/obtenerTodos', getTutoriales);

//CRUD: Read One
router.get('/obtenerUno/:id', getTutorial);

//CRUD: Update
router.put('/actualizarTutorial/:id', updateTutorial);

//CRUD: Delete
router.delete('/eliminarTutorial/:id', deleteTutorial);

export default router;