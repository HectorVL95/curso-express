const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos')

// Routers; Estos se usan parano repetir varias veces parte de la URL como por ejemplo nota que estamos repitiendo varias veces /api/cursos/programacion/ o /api/cursos/matematicas/

const routerProgramacion = require('./routers/programacion')
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas')
app.use('/api/cursos/matematicas', routerMatematicas)



app.get('/', (req, res)=> {
  res.send('Mi primer servidor con express. Cursos.')
});

app.get('/api/cursos', (req, res) =>{
  res.send(JSON.stringify(infoCursos));
});


//Si hubieran muchos lenguajes y tu solo quieres ver un lenguaje en especifico lo que puedes hacer es lo siguiente

//Cursos de programacion



//Cursos de matematicas

const PUERTO = process.env.PORT || 3000

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});

 