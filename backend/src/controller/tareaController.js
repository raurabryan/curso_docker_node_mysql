const tareaService = require('../services/tareasService'); 

async function getTareas(req, res) {
    try {
        const tareas = await tareaService.getTareas(req.user.id);
        res.status(200).json({message: 'Tareas obtenidas con éxito', tareas});
    } catch (error) {
        res.status(500).json({error: 'Error al obtener las tareas'});
    }
}

async function deleteTarea(req, res) {
    const { id } = req.params;
    try {
        await tareaService.deleteTarea(id);
        res.status(200).json({ message: 'Tarea eliminada con éxito' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
}

async function createTarea(req, res) {
    try {
        const tarea = await tareaService.createTarea(req.body, req.user.id);
        res.status(201).json({message: 'Tarea creada con éxito', tarea});
    }
    catch (error) {
        res.status(500).json({error: 'Error al crear la tarea'});
    }
}

module.exports = {
    getTareas,
    deleteTarea,
    createTarea
};