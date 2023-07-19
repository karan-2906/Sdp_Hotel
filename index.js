const express = require('express')
const errorHandler = require('./middlewares/errorHandler');
const menuroutes = require('./routes/menuroutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/oderroutes');
require('dotenv').config();
const connection = require('./db/databaseConnect')
const app = express();

connection();
app.use(express.json());
app.use('/api/v1/menus', menuroutes);
app.use('/api/v1/customers',customerRoutes)
app.use('/api/v1/orders',orderRoutes)
app.use(errorHandler);
app.listen(5000, () => {
    console.log('Converted RAM to SERVER');
})