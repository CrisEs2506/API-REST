import Tutorial from "../models/tutorial.model.js"

//CRUD Create
export const createTutorial = async(req, res) => {
    const { autor, informacion, fechaCreacion } = req.body

    try 
    {
        const newTutorial = new Tutorial({
            autor,
            informacion,
            fechaCreacion
        })
    
        const tutorialSaved = await newTutorial.save();
        res.json(tutorialSaved);    
    } 
    catch (error) 
    {
        console.log(error);
    }
};

//CRUD ReadAll
export const getTutoriales = async(req, res) => {
    const tutoriales = await Tutorial.find();
    res.json(tutoriales);
};

//CRUD ReadOne
export const getTutorial = async(req, res) => {
    const tutorial = await Tutorial.findById(req.params.id);
    if(!tutorial) return res.status(404).json({message: 'Tutorial no encontrado'});
    res.json(tutorial);
};

//CRUD Update
export const updateTutorial = async(req, res) => {
    const tutorial = await Tutorial.findByIdAndUpdate(req.params.id, req.body, {
        new: true //Dar los datos actualizados y no los antiguos
    });
    if(!tutorial) return res.status(404).json({message: 'Tutorial no encontrado y no actualizado'});
    res.json(tutorial)
};

//CRUD Delete
export const deleteTutorial = async(req, res) => {
    const tutorial = await Tutorial.findByIdAndDelete(req.params.id);
    if(!tutorial) return res.status(404).json({message: 'Tutorial no encontrado y no eliminado'});
    res.json(tutorial)
};