import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import jwt from 'jsonwebtoken';
import { getEmployees, addEmployee, getUser, addUser, getEmployee, getUsers, updateEmployee, deleteEmployee, deleteUser, updateUser, authenticateToken } from './database.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 *  components:
 *        schemas:
 *            Employee:
 *                    type: object
 *                    properties:
 *                         id: 
 *                            type: integer
 *                         firstName:
 *                                  type: string
 *                         lastName: 
 *                            type: string
 *                         email:
 *                                  type: string
 *                         nationalIdentity: 
 *                            type: integer
 *                         telephone:
 *                                  type: integer
 *                         department: 
 *                            type: string
 *                         position:
 *                                  type: string
 *                         laptopManufacturer:
 *                                  type: string
 *                         laptopModel: 
 *                            type: string
 *                         serialNumber:
 *                                  type: integer
 */

/**
 * @swagger
 * /employees:
 *    get:
 *      summary: To get all employees from db
 *      tags: [employees]
 *      description: This api is used to retrieve data from the database
 *      responses:
 *            200:
 *                description: This api is used to retrieve data from the database
 *                content:
 *                    application/json: 
 *                            schema:
 *                                type: array
 *                                items: 
 *                                    $ref: '#components/schemas/Employee'
 */


/**
 * @swagger
 * /employees/{id}:
 *    get:
 *      summary: To get a specified employee from db
 *      tags: [employees]
 *      description: This api is used to retrieve data from the database
 *      parameters: 
 *           - in: path
 *             name: id
 *             required: true 
 *             description: Numeric ID required
 *             schema:
 *               type: integer
 *      responses:
 *            200:
 *                description: This api is used to retrieve data from the database
 *                content:
 *                    application/json: 
 *                            schema:
 *                                type: array
 *                                items: 
 *                                    $ref: '#components/schemas/Employee'
 */



/**
 * @swagger
 * /employees/addEmployee:
 *    post:
 *      summary: To add an employee to db
 *      tags: [employees]
 *      description: This api is used to insert data to the database
 *      requestBody:
 *            required: true
 *            content:
 *                application/json:
 *                      schema:
 *                          $ref: '#components/schemas/Employee'
 *      responses:
 *            200:
 *                description: Added Successfully 
 */

/**
 * @swagger
 * components:
 *     schemas:
 *         User:
 *              type: object
 *              properties:
 *                     userName:
 *                          type: string
 *                     password:
 *                          type: string
 */

/**
 * @swagger
 * /users:
 *    get:
 *      summary: To get all users
 *      tags: [users]
 *      description: This api is used to retrieve data from the database
 *      responses:
 *            200:
 *                description: This api is used to retrieve data from the database
 *                content:
 *                    application/json: 
 *                            schema:
 *                                type: array
 *                                items: 
 *                                    $ref: '@components/schemas/User'
 */

/**
 * @swagger
 * /users/{id}:
 *    get:
 *      summary: To get a specified user from db
 *      tags: [users]
 *      description: This api is used to retrieve data from the database
 *      parameters:
 *           - in: path
 *             name: id
 *             required: true 
 *             description: Numeric ID required
 *             schema:
 *               type: integer
 *      responses:
 *            200:
 *                description: This api is used to retrieve data from the database
 *                content:
 *                    application/json: 
 *                            schema:
 *                                type: array
 *                                items: 
 *                                    $ref: '#components/schemas/User'
 */


