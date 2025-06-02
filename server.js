const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const appointmentRoutes = require('./routes/appointmentRoutes');

require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());

app.use('/appointments',appointmentRoutes);

sequelize.sync().then(()=>{
    app.listen(process.env.PORT,()=>
    console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
}).catch((err)=>{
    console.error('Database Sync failed',err);
});