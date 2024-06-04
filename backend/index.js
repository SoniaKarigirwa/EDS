import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import jwt from 'jsonwebtoken';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { getEmployees, addEmployee, getUser, addUser, getEmployee, getUsers } from './database.js';

const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'EQUIPMENT DISTRIBUTION SYSTEM API WITH NODEJS',
      version: '1.0.0',
      description: 'A simple Express Library API',
    },
    servers: [
      {
        url: 'http://localhost:9000',
      },
    ],
  },
  apis: ['./index.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

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

app.get("/employees", async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
})

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


app.get("/employees/:id", async (req, res) => {
  const id = req.params.id;
  const employee = await getEmployee(id)
  res.send(employee)
})

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

app.post("/employees/addEmployee", async (req, res) => {
  const { firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber } = req.body;
  const employee = await addEmployee(firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber);
  res.status(201).send(employee);
})

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

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
})

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

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.send(user);
})

app.post("/addUser", async (req, res) => {
  const { username, password } = req.body;
  const user = await createUser(username, password);
  res.status(201).send(user);

  // jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  // res.json({ accessToken: accessToken })

});


//ErrorHandling
app.use((err, req, res, next) =>{
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
