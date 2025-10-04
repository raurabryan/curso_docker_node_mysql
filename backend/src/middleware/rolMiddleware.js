function autorizarRoles(...rolesPermitidos){
    return (req, res, next) => {
        console.log('req.user:', req.user); // <--- agrega esto
        if(!req.user){
            return res.status(401).json({ mensaje: 'No autenticado' });
        }
        if(!rolesPermitidos.includes(req.user.rol)){
            return res.status(403).json({ mensaje: 'No autorizado' });
        }
        next();
    }
}
module.exports = {
    autorizarRoles
}
