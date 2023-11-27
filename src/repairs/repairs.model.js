const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dataBase/dataBase");

const Repairs = sequelize.define("repairs", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    status: {
        type: DataTypes.ENUM("pending", "completed", "cancelled"),
        allowNull: false,
        defaultValue: "pending"
    },

    userId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: 'Users', // Nombre del modelo de usuarios
        //     key: 'id' // Clave primaria del modelo de usuarios
        // }
    }
});

module.exports = Repairs;
