import { getAllEmployees, getEmployeeById, createEmployee, updateEmployeeById, deleteEmployeeById }  from '../controllers/employeeController.js';
import express from 'express';


const employeeRoutes = express();

employeeRoutes.get('/employees', getAllEmployees)
employeeRoutes.get('/employee/:id', getEmployeeById)
employeeRoutes.post('/employees/addEmployee', createEmployee)
employeeRoutes.put('/employees/updateEmployee/:id', updateEmployeeById)
employeeRoutes.delete('./employees/deleteEmployee/:id', deleteEmployeeById)

export default employeeRoutes