const {PrismaClient} = require('@prisma/client');   
const prisma = new PrismaClient();

async function agregarToken(token){
    return await prisma.tokenRevocado.create({
        data: { token }
    });
}

async function estaRevocado(token){
    const tokenEncontrado = await prisma.tokenRevocado.findUnique({
        where: { token }
    });
    return !!tokenEncontrado; // Devuelve true si el token está revocado, false en caso contrario
}

module.exports = {
    agregarToken,
    estaRevocado
};