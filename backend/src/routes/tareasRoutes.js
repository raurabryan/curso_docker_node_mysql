const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middleware/authMiddleware'); 
const tareaController = require('../controller/tareaController');   
const { autorizarRoles } = require('../middleware/rolMiddleware');
const tareaService = require('../services/tareasService'); // filepath: c:\Users\USER\Desktop\NODE-DOCKER\curso_docker_node_mysql\backend\src\routes\tareasRoutes.js

router.get('/tareas', verificarToken, tareaController.getTareas);
router.post('/tareas', verificarToken, async (req, res) => {
    try {
       
        const tarea = await tareaService.createTarea(req.body, req.user.id);
        res.status(201).json({message: 'Tarea creada con éxito', tarea});
    }
    catch (error) {
        console.error(error); // <-- Esto te mostrará el error real en la consola
        res.status(500).json({error: 'Error al crear la tarea', detalle: error.message});
    }
});
router.delete('/tareas/:id', verificarToken, autorizarRoles('admin'), tareaController.deleteTarea);

module.exports = router;
