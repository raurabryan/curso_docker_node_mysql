const tareasRepository = require('../repositories/tareasRepository');

async function getTareas(userId) {
    return await tareasRepository.getTareasByUser(userId);
}

async function deleteTarea(id) {
    return await tareasRepository.deleteTarea(id);
}

async function createTarea(tarea, userId) {
    return await tareasRepository.createTarea({ ...tarea, userId });
}

module.exports = {
    getTareas,
    deleteTarea,
    createTarea
};