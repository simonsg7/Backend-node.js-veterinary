const express = require('express');

const app = express()
const port = 3000

app.set('port', 3000)

app.get('/:id', (req, res)=>{
    const {id} = req.params
    res.json(id)
})

app.listen(app.get('port'), (error)=>{
    if (error) {
        console.error(error)
    } else {
        console.log('Servidor...', port)
    }
})