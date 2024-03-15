const conexion = require('../../../../config/conexion')

exports.getAllPets = (req, res)=>{
    const sql = 'SELECT * FROM pets'
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res(error) 
        } else {
            res.json(rows)
        }
    })
}

exports.getByIdPets = (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT * FROM pets WHERE id = ${id}`
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res(error) 
        } else {
            res.json(rows)
        }
    })
}