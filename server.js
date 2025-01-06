const express = require('express');
const routers = require('./assets/routes/mainRoutes.js');
const {router} = routers; 

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(router);
app.listen(3000, ()=>{console.log('Server Started');});