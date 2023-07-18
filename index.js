const express = require('express')
const errorHandler = require('./middlewares/errorHandler');
// const patientRoutes = require('./routes/patientRoutes');
const customerRoutes = require('./routes/customerRoutes');
require('dotenv').config();
const connection = require('./db/databaseConnect')
const app = express();

connection();
app.use(express.json());
// app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/customers',customerRoutes)
app.use(errorHandler);
app.listen(5000, () => {
    console.log('Converted RAM to SERVER');
})