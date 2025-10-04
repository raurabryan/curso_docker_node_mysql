const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(user) {
    return await prisma.usuario.create({ // Cambia 'user' por 'usuario'
        data: user
    });
}

async function buscarPorEmail(email) {
    return await prisma.usuario.findUnique({
        where: { email: email }
    });
}

module.exports = {
    createUser,
    buscarPorEmail
};
