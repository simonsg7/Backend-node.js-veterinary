const conexion = require('../../../../config/conexion')

exports.getAllQuotes = (req, res)=>{
    const sql = 'SELECT * FROM quotes'
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res(error) 
        } else {
            res.json(rows)
        }
    })
}

exports.getByIdQuotes = (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT * FROM quotes WHERE id = ${id}`
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res(error) 
        } else {
            res.json(rows)
        }
    })
}