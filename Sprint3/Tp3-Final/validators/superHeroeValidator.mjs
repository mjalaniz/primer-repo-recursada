import { body } from "express-validator";

//Aquí voy a definir las reglas de validaciones para cada 
//conjunto de rutas o funcionalidades

export const validarSuperHeroe = [
    
    body('nombreSuperHeroe')
        .trim()
        .notEmpty().withMessage('El nombre del superheroes es requerido')
        .isLength({min: 3, max:60}).withMessage('El nombre del superheroe debe tener entre 3 y 60 caracteres')
        .custom(value => {
            if (/^\d+$/.test(value)) {
                throw new Error('El nombre del superhéroe no puede contener solo números');
            }
            return true;
        }),

    body('nombreReal')
        .trim()
        .notEmpty().withMessage('El nombre real del superheroe es requerido')
        .isLength({min: 3, max: 60}).withMessage('El nombre real del superheroe de tener entre 3 y 60 caracteres')
        .custom(value => {
            if (/^\d+$/.test(value)) {
                throw new Error('El nombre real no puede contener solo números');
            }
            return true;
        }),

    body('edad')
        .trim()
        .notEmpty().withMessage('La edad es un valor requerido')
        .isNumeric().withMessage('La edad debe ser un valor numérico')
        .custom((edad) => edad >= 0).withMessage('La edad debe ser un valor positivo'), 
        
    body('poderes')
        .custom((value) => {
            // Divido la cadena separada por comas en un array
            const poderesArray = value.split(',').map(poder => poder.trim());
    
            // Valido si el array tiene al menos un poder válido
            if (poderesArray.length < 1 || poderesArray.some(poder => poder === '')) {
                throw new Error('Poderes debe tener al menos un poder válido');
            }
    
            // Valido que cada poder sea una cadena válida
            for (const poder of poderesArray) {
                // Chequeo si es numérico (valores como "123", "12.34" o "-56" no deben ser válidos)
                if (!isNaN(Number(poder))) {
                    throw new Error('Los poderes no pueden ser valores numéricos');
                }
    
                // Validolongitud de la cadena
                if (poder.length < 3 || poder.length > 60) {
                    throw new Error('Los poderes deben tener entre 3 y 60 caracteres');
                }
            }
            return true;
        })
];
