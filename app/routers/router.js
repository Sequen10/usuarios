let express = require('express');
let router = express.Router();
 
//Importar tablas
const usuarios = require('../controllers/usuario.controller.js');


//Tabla usuarios
router.post('/api/usuarios/create', usuarios.create);
router.get('/api/usuarios/onebyid/:id', usuarios.getUsuarioById);
router.put('/api/usuarios/update/:id', usuarios.updateById);
router.delete('/api/usuarios/delete/:id', usuarios.deleteById);

module.exports = router;