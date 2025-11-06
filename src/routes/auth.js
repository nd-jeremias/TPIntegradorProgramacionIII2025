import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { Usuarios } from '../models/users.js';

const SALT = 10;

const router = express.Router();

router.post('/registrarse', async (req, res) => {

    const { email, nombre, apellido, contraseña } = req.body;
    const hashedPassword = await bcrypt.hash(contraseña, SALT);
    
    try {

        await Usuarios.create({ email, nombre, apellido, contraseña: hashedPassword });

        res.status(201).json({ message: `Usuario registrado correctamente.` });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
});

router.post('/ingresar', async (req, res) => {
    
    try {
        const { email, contraseña } = req.body;
        // Buscar usuario en la base
        const usuario = await Usuarios.findOne({ where: { email } });
        
        if (!usuario) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        // Comparar contraseñas
        const esValido = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!esValido) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        // Crear token JWT
        const token = jwt.sign(
            { email: usuario.email, nombre: usuario.nombre },
            process.env.JWT_SECRET,
            { expiresIn: (60 * 5) }
        );

        // Enviar cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: ( 1000 * 60 * 5 )
        });

        res.json({ message: 'Login exitoso', usuario: usuario.nombre });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post('/salir', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Sesion finalizada' });
});

// MIDDLEWARE de autenticación
export function verificarToken(req, res, next) {
    
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Token no encontrado" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Si faltan menos de 1 minutos para que expire, se renueva el token
        const ahora = Math.floor(Date.now() / 1000);
        if ((decoded.exp - ahora) < 60) {
            const nuevoToken = jwt.sign(
                { email: decoded.email, nombre: decoded.nombre },
                process.env.JWT_SECRET,
                { expiresIn: (60 * 5) }
            )
        res.cookie('token', nuevoToken, 
            {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
                maxAge: ( 1000 * 60 * 5 )
            });
        }

        req.usuario = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
}


export default router;