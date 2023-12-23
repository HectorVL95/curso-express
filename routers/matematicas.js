const express = require('express');

const {matematicas} = require('../datos/cursos').infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.use(express.json());

routerMatematicas.get('/', (req, res) =>{
  res.send(JSON.stringify(matematicas))
})

routerMatematicas.get('/:tema', (req, res) =>{
  const tema = req.params.tema;
  const resultados = matematicas.filter(curso => curso.tema === tema)

  if(resultados.length === 0){
    return res.status(404).send(`No se encontraron temas de ${tema}`)
  }

  res.send(JSON.stringify(resultados))
})

routerMatematicas.post('/', (req, res) =>{
  const temaNuevo = req.body;
 matematicas.push(temaNuevo)
 res.send(matematicas)
})

routerMatematicas.put('/:id', (req, res)=>{
  const cursoActualizado = req.body;
  const id = req.params.id

  const indice = matematicas.findIndex(curso => curso.id == id);

  if(indice >= 0){
    matematicas[indice] = cursoActualizado;

    res.send(matematicas)
  }
})

routerMatematicas.patch('/:id', (req, res)=>{
  const infoActualizada = req.body
  const id = req.params.id;

  const indice = matematicas.findIndex(curso => curso.id == id)

  if(indice >= 0) {
    const cursoModificar = matematicas[indice]
    Object.assign(cursoModificar, infoActualizada)
  }
  res.send(matematicas)
})

routerMatematicas.delete('/:id', (req,res)=>{
  const id = req.params.id
const indice = matematicas.findIndex(curso => curso.id == id)

  if(indice >= 0){
    matematicas.splice(indice, 1)
  }
  res.send(matematicas);
})
module.exports = routerMatematicas
