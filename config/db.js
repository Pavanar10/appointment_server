
    require('dotenv').config();
const { Sequelize } = require('sequelize');

    console.log("DB name",process.env.DB_NAME);


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    
    {
        
        dialect : 'mssql',
        
        dialectOptions:{
            options:{
                encrypt:false,
                trustServerCertificate:true
            }
        } ,
        port : process.env.DB_PORT,
        host: process.env.DB_HOST,
        logging:false,
        server:process.env.DB_HOST
    }
);

module.exports = sequelize;