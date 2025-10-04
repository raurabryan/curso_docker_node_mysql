const authServices = require('../services/authServices'); 
const blacklistRepository = require('../repositories/tokenBlacklistRepository');



async function registrarUsuario(req, res) {
    try {
        const user = await authServices.registarUsuario(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


async function loginUsuario(req, res) {
    try {
        const token = await authServices.loginUsuario(req.body);
        res.status(200).json({token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

async function logout(req, res) {
   const authHeader = req.headers.authorization;    
   if(!authHeader){
         return res.status(401).json({error: 'No se proporciono el token' });
   }
   const token = authHeader.split(' ')[1];
   if (!token) {
         return res.status(401).json({ error: 'No se proporcino el token modificado' });
   }

   await blacklistRepository.agregarToken(token);
   res.status(200).json({message: 'Logout exitoso'});

   
}

module.exports = {
    registrarUsuario,
    loginUsuario,
    logout
};