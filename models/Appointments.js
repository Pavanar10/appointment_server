const {DataTypes} = require('sequelize');
const sequelize = require('../config/db.js');
const { type } = require('express/lib/response');

const appointments = sequelize.define('appointments',{
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT
    },
    date:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    time:{
        type:DataTypes.TIME,
        allowNull:false
    }
},
    {
        timestamps:false
    }
);

module.exports = appointments;