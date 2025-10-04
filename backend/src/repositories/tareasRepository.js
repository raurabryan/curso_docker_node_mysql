const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getTareasByUser(userId) {
    return await prisma.tarea.findMany({
        where: { userId }
    });
}

async function createTarea(tarea) {
    return await prisma.tarea.create({
        data: {
            titulo: tarea.titulo,
            descripcion: tarea.descripcion,
            usuarioId: tarea.userId // <-- usa usuarioId
        }
    });
}

async function deleteTarea(id) {
    return await prisma.tarea.delete({
        where: { id: Number(id) }
    });
}

module.exports = {
    getTareasByUser,
    createTarea,
    deleteTarea
};