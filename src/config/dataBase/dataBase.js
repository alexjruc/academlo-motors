//? ORM: libreria que permite establecer una conexion entre el servidor y la base de datos
const { Sequelize } = require("sequelize");
const { envs } = require("../enviroments/enviroments");

const sequelize = new Sequelize(envs.DB_URL, {
    logging: false,
});

const auth = async () => {
    try {
        await sequelize.authenticate();
        console.log("conexion exitosa");
    } catch (error) {
        console.log(error);
    }
};

const syncUp = async () => {
    try {
        //! el { force: true } sirve para forzar los cambios a mi base de datos
        //! cuidado por que esto borra toda la informacion de la base de datos
        //ToDo await sequelize.sync({ force: true })
        await sequelize.sync();
        console.log("conexion sincronizada");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    auth,
    syncUp,
    sequelize,
};
