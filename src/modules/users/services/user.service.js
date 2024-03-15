const conexion = require('../../../../config/conexion');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.getAllUsers = (req, res)=>{
    const sql = 'SELECT * FROM users'
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res.json(error) 
        } else {
            res.json(rows)
        }
    })
}

exports.getById = (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT * FROM users WHERE id = ${id}`
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res.json(error) 
        } else {
            res.json(rows)
        }
    })
}

exports.createUser =  async (req, res)=>{
    const {full_name, phone, address, email, rol, password} = req.body;
    const passwordHash = await bcrypt.hash(password, 10)

    const sql = `INSERT INTO users (full_name, phone, address, email, rol, password) VALUES ('${full_name}', '${phone}', '${address}', '${email}', '${rol}', '${passwordHash}')`
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res.json(error) 
        } else {
            res.json({status: 200, message: 'USER_CREATE_SUCCESFULLY'})
        }
    })
}

exports.updateUser = (req, res)=>{
    const {id, full_name, phone, address, email, rol, password} = req.body;

    const sql = `UPDATE users SET full_name = '${full_name}', phone = '${phone}', address = '${address}', email = '${email}', rol = '${rol}', password = '${password}' WHERE id = '${id}'`
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res.json(error) 
        } else {
            res.json(rows)
        }
    })
}

exports.deleteUser = (req, res)=>{
    const {id} = req.params;

    const sql = `DELETE FROM users WHERE id = '${id}'`
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res.json(error) 
        } else {
            res.json("USER_DELETED_SUCCESFULY")
        }
    })
}

exports.authUser =  async (req, res)=>{
    const {email, password: inPassword} = req.body;
    const secret = process.env.SECRET_AUTH
    const credentials = {
        email: email,
        password: inPassword
    }
    const sql = `SELECT * FROM users WHERE email = '${email}'`
    conexion.query(sql, async (error, rows)=>{
        if (error) {
            res.json(error) 
        } else {
            if (rows.length) {
                const {password} = rows[0] 
                const passwordIsCorrect = await bcrypt.compare(inPassword, password)
                const token = jwt.sign(credentials, secret)
                if (passwordIsCorrect) {
                    res.json({
                        name: rows[0].full_name,
                        email: rows[0].email,
                        token: token
                    })
                } else {
                    res.json("ERROR_PASSWORD")
                } 
            } else {
                res.json("USER_DOES_NOT_EXISTS")
            }
            
        }
    })
}