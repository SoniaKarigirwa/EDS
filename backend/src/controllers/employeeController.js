import EmployeeModel from "../models/employeeModel.js";

export const getAllEmployees = async (req, res) => {
    try {
        const employees = await EmployeeModel.findAll();
        res.send(employees);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getEmployeeById = async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await EmployeeModel.findOne({ id })
        console.log(id, employee)
        res.send(employee);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createEmployee = async (req, res) => {
    try {
        const { firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber } = req.body;
        const employee = await EmployeeModel.create({firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber});
        res.status(201).send(employee);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateEmployeeById = async(req, res) => {
    try {
        const { firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber } = req.body;
        const employee = await EmployeeModel.update({ firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber }, { where: { id: req.params.id }});
        res.status(201).send(employee);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteEmployeeById = async(req, res) => {
    try {
        const {id} = req.params;
        const employeeExists = await EmployeeModel.findOne({where: {id}})

        console.log(employeeExists)

        const deletedEmployee = await EmployeeModel.destroy( { where : { id }});
        res.status(201).send({message: "Successfully deleted employee"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}