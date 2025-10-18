// Repositorio: https://github.com/vitaccajulian/Parcial02-NicolasJeremias-JulianVitacca

require('dotenv').config();
const express = require('express'); 
const app = express();

const PORT = process.env.PORT;

/* Rutas */
app.get('/', (req, res) => {
    res.send("Hello Word");
});

/* Archivos Estaticos */ 
app.use(express.static('public'));

/* View Engine */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

app.listen(PORT, () => console.log(`Servidor corriendo en puerto:${PORT}`));