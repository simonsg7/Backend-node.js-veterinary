const express = require('express');

const app = express()
const port = 3000

app.set('port', port)

app.get('/:id', (req, res)=>{
    const {id} = req.params
console.log("hola desde get", id)
})

app.listen(app.get('port'), (error)=>{
   if (error) {
    console.error(error)
   } else {
    console.log('Servidor ...', port)
   }
})