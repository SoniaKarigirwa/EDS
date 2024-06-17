import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import employeeRoutes from './src/routes/employeeRoute.js'
import userRoutes from './src/routes/userRoute.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

var corsConfig = "http://localhost:9000"
app.use(cors(corsConfig))

app.use(employeeRoutes)
app.use(userRoutes)

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
  apis: ['./index.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


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
