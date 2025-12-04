import { body, validationResult } from 'express-validator';

// Middleware que detiene la ejecución si hay errores de validación
const validateProduct = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Si hay errores, devuelve un JSON con los errores encontrados
        return res.status(400).json({ errors: errors.array() });
    }
    // Si todo es correcto, pasa al siguiente middleware (tu controlador createProduct)
    next();
};

// Reglas de validación y sanitización para crear/actualizar productos
export const ValidationRules = [
    // --- VALIDACIONES GENERALES --- \\

    // Título: requerido, mínimo 3 caracteres, sanitizado (limpia HTML)
    body('titulo').trim().isLength({ min: 3 }).withMessage('El título es requerido y debe tener al menos 3 caracteres').escape()
        .trim().isLength({ max: 100 }).withMessage('El título debe tener maximo 100 caracteres').escape(),

    // Precio: requerido, numérico, mínimo 0, sanitizado
    body('precio').notEmpty().withMessage('El precio es requerido')
        .isNumeric().withMessage('El precio debe ser un número')
        .toFloat().isFloat({ min: 0 }).withMessage('El precio no puede ser negativo'),

    // Stock: requerido, numérico, mínimo 0
    body('stock').notEmpty().withMessage('El stock es requerido')
        .isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo'),

    // Estado: requerido, booleano válido
    body('estado').isBoolean().withMessage('El estado debe ser verdadero o falso'),

    // Categoría: requerido, debe ser 'Disco' o 'Libro'
    body('categoria').isIn(['Disco', 'Libro']).withMessage('Categoría inválida'),

    // --- VALIDACIONES CONDICIONALES (BASADO EN LA CATEGORÍA) --- \\

    // Valida campos específicos SOLO si categoria es 'Disco'
    body('interprete').if(body('categoria').equals('Disco'))
        .trim().notEmpty().withMessage('El intérprete es requerido para Discos').escape(),

    body('year').if(body('categoria').equals('Disco'))
        .isInt({ min: 1900, max: new Date().getFullYear() })
        .withMessage('Año de disco inválido'),

    // Valida campos específicos SOLO si categoria es 'Libro'
    body('autor').if(body('categoria').equals('Libro'))
        .trim().notEmpty().withMessage('El autor es requerido para Libros').escape(),

    body('editorial')
        .if(body('categoria').equals('Libro'))
        .trim().notEmpty().withMessage('La editorial es requerida para Libros').escape(),

    // --- EL MIDDLEWARE QUE VERIFICA TODO --- \\
    validateProduct
];
