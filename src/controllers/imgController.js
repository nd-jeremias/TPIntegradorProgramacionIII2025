export const saveImg = (req, res) => {

    // El archivo ya ha sido procesado y guardado por el middleware 'upload'
    const file = req.file;

    if (!file) {
        return res.status(400).send("No se ha subido ningún archivo.");
    }

    const publicUrl = `/img/${file.filename}`;

    console.log(`Archivo procesado y guardado en: ${file.path}`); // Aca file.path es la ruta final absoluta

    res.send({ url: publicUrl });
}

export const saveMultiImg = (req, res) => {
    
    const files = req.files; 

    if (!files || files.length === 0) {
        return res.status(400).send("No se han subido archivos.");
    }
   
    // Creamos un array para almacenar todas las URLs públicas
    const urlsPublicas = files.map(file => {
        // file.filename ya contiene el nombre limpio generado por Multer en storage.filename
        return `/img/${file.filename}`;
    });

    console.log("Archivos procesados y guardados:", urlsPublicas);

    res.send({ 
        message: `${files.length} archivos subidos exitosamente`,
        urls: urlsPublicas 
    });
}