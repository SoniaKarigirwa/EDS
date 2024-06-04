import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()


export async function getEmployees() {
    const [rows] = await pool.query('SELECT * FROM employees')
    return rows
}

export async function getEmployee(id) {
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id])
    return rows[0]
}

export async function addEmployee(firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber) {
    const [result] = await pool.query('INSERT INTO employees (firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber])
    const id = result.insertId
    // return getEmployee(id)
    return "Added successfully"
}

export async function getUsers() {
    const [rows] = await pool.query('SELECT * FROM users')
    return rows
}

export async function getUser(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id])
    return rows[0]
}

export async function addUser(username, password) {
    const [result] = await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password])
    const id = result.insertId
    return getUser(id)
}























//   app.post('/users', (req, res) => {
//     const sql = "SELECT * FROM users WHERE `userName` = ? AND `password` = ?";
//     db.query(sql, [ req.body.userName, req.body.password], (err, data) => {
//       if(err) {
//         return res.json("Error");
//       }
//       if(data.length > 0) {
//         return res.json("Success");
//       } else {
//         return res.json("Fail");
//       }
//     })
//   })
  
  
//   app.post('/employees', (req, res) => {
//     const sql = "INSERT INTO employees (`firstName`, `lastName`, `email`, `nationalIdentity`, `telephone`, `department`, `position`, `laptopManufacturer`, `laptopModel`, `serialNumber` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//     const values = [
//       req.body.id,
//       req.body.firstName,
//       req.body.lastName,
//       req.body.email,
//       req.body.nationalIdentity,
//       req.body.telephone,
//       req.body.department,
//       req.body.position,
//       req.body.laptopManufacturer,
//       req.body.laptopModel,
//       req.body.serialNumber
//     ]
//     db.query(sql, [values], (err, data) => {
//       if(err) {
//         return res.json("Error");
//       }
//       return res.json(data);
//     });
//   });
  