import { getEmployees, getEmployee, addEmployee, updateEmployee, deleteEmployee } from '../service/employeeService.js'

export const getAllEmployees = async (req, res) => {
    try {
        const employees = await getEmployees();
        res.send(employees);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getEmployeeById = async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await getEmployee(id);
        res.send(employee);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createEmployee = async (req, res) => {
    try {
        const { firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber } = req.body;
        const employee = await addEmployee(firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber);
        res.status(201).send(employee);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateEmployeeById = async(req, res) => {
    try {
        const { firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber } = req.body;
        const employee = await updateEmployee(firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber);
        res.status(201).send(employee);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteEmployeeById = async(req, res) => {
    try {
        const {id} = req.params;
        const employee = await deleteEmployee(id);
        res.status(201).send(employee)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}