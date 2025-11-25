import multer from 'multer';
import path from 'path';
import fs from 'fs';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DESTINO_ABSOLUTO = path.join(__dirname, '..', '..', 'public', 'img');

// Se verifica que la carpeta exista si Multer no la crea automáticamente
if (!fs.existsSync(DESTINO_ABSOLUTO)) {
    fs.mkdirSync(DESTINO_ABSOLUTO, { recursive: true });
}

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        // Multer lo guarda aquí directamente
        cb(null, DESTINO_ABSOLUTO);
    },

    filename: function (req, file, cb) {

        /* Genera el nombre final limpio */

        // Tomamos extension del nombre original
        const ext = path.extname(file.originalname);

        // Leemos el nombre del parámetro de la URL: req.params.nombre_producto
        const nombreDinamico = req.params.nombre || "generic"

        // 1. Reemplaza tildes y caracteres latinos por sus equivalentes ASCII
        let cleanName = nombreDinamico.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // 2. Convierte todo a minúsculas
        cleanName = cleanName.toLowerCase();

        // 3. Reemplaza cualquier carácter que NO sea alfanumérico, guión bajo o guión medio por un guión bajo
        // /[^a-z0-9_-]/g significa "todo lo que NO esté dentro de este conjunto"
        cleanName = cleanName.replace(/[^a-z0-9_-]/g, "_");

        // 4. Reemplaza múltiples guiones bajos consecutivos por uno solo
        cleanName = cleanName.replace(/_+/g, "_");

        // 5. Elimina guiones bajos al inicio o al final
        cleanName = cleanName.replace(/^_+|_+$/g, "");
        
        // Si cleanName es un string vacio, crea un nombre generico
        if (cleanName == "generic") {

            const fecha = new Date().toISOString();
            cleanName += fecha.replace(/-/g, "")
                .replace("T", "_")
                .replace(/:/g, "")
                .replace(/\..+/, "")
                .replace("Z", "");

        }

        const finalName = `${cleanName}${ext}`;
        cb(null, finalName);
    }

});

// Exportamos el middleware configurado
export const upload = multer({ storage: storage });
