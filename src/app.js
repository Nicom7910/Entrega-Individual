const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routers/index');

app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname , './views'))

app.use(express.static( path.join(__dirname, '../public')))

app.use('/' , indexRouter)

app.listen(3300, function(){
    console.log("El servidor esta corriendo en el servidor 3300")
    console.log("http://localhost:3300")
})