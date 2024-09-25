
module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        id_usuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },

        telefono: {
            type: Sequelize.INTEGER
        },
        direccion:{
            type: Sequelize.STRING
        },
        fecha_ingreso: {
            type: Sequelize.DATE
        },
        estado: {
            type: Sequelize.INTEGER
        }

    });
    return Usuario;
};