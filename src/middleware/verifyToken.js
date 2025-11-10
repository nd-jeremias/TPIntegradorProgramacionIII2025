import jwt from 'jsonwebtoken';

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
                sameSite: 'lax',
                maxAge: ( 1000 * 60 * 5 )
            });
        }

        req.usuario = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
}
