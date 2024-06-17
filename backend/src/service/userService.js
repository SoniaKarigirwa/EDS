import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
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

export async function updateUser(username, password, id) {
    const [result] = await pool.query('UPDATE users SET username = ?, password = ? WHERE id = ?', [username, password, id])
    if(result.affectedRows === 0) {
        throw new Error("User doesn't exist");
    }
    return "Updated successfully";
}

export async function deleteUser(id) {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    if(result.affectedRows === 0) {
        throw new Error("User doesn't exist");
    }
    return "Deleted successfully";
}
