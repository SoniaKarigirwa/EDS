import { getAllEmployees, getEmployeeById, createEmployee, updateEmployeeById, deleteEmployeeById }  from '../controllers/employeeController.js';
import express from 'express';
import authenticate from '../middlewares/authMiddleware.js'
import { validateEmployeeRegistration } from '../validators/employeevalidator.js';


const employeeRoutes = express();

employeeRoutes.get('/employees', authenticate, getAllEmployees)
employeeRoutes.get('/employee/:id', authenticate, getEmployeeById)
employeeRoutes.post('/employees/addEmployee', authenticate, validateEmployeeRegistration, createEmployee)
employeeRoutes.put('/employees/updateEmployee/:id', authenticate, updateEmployeeById)
employeeRoutes.delete('/employees/deleteEmployee/:id', authenticate, deleteEmployeeById)

export default employeeRoutes