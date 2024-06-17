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

export async function updateEmployee(firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber) {
    const[result] = await pool.query('UPDATE employees SET firstName = ?, lastName = ?, email = ?, nationalIdentity = ?, telephone = ?, department = ?, position = ?, laptopManufacturer = ?, laptopModel = ?, serialNumber = ? WHERE id = ?',[firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber])
    if(result.affectedRows === 0){
        throw new Error('Employee not found');
    }
    return "Updated successfully";
}

export async function deleteEmployee(id) {
    const[result] = await pool.query('DELETE FROM employees WHERE id = ?', [id]);
    if(result.affectedRows === 0) {
        throw new Error('Employee not found');
    }
    return "Deleted successfully";
}
