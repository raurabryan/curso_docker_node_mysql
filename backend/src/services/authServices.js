const bycrypt = require('bcrypt');

const userRepository = require('../repositories/userRepository');

const saltRounds = 10;

async function registarUsuario(data){
    const userExistente = await userRepository.buscarPorEmail(data.email);
    if(userExistente){
        throw new Error('El usuario ya existe');
    }
    const hashedPassword = await bycrypt.hash(data.password, saltRounds);
    const user = await userRepository.createUser({
        ...data,
        password: hashedPassword,
        rol: data.rol || "usuario" // <-- Usa el rol enviado, o "usuario" por defecto
    });
    return user;
}


const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET ;

const secret_key = jwtSecret;

async function loginUsuario(data){
    const user = await userRepository.buscarPorEmail(data.email);   
    if(!user){
        throw new Error('Usuário não encontrado');
    }
    const passwordCorret = await bycrypt.compare(data.password, user.password);
    
    const payload = {id: user.id, email: user.email, rol: user.rol};

    const token = jwt.sign(payload, secret_key, {expiresIn: '1h'}   );
    return  token;
}





module.exports = {
    registarUsuario,
    loginUsuario
};