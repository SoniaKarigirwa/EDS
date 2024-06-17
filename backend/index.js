import dotenv from 'dotenv';
dotenv.config();

import express, { json } from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
import { corsFunction } from './src/utils/cors.js';
import { createRequire } from "module";
// import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { connectDB, sequelize } from './src/utils/database.js';;
import employeeRoutes from './src/routes/employeeRoute.js'
import userRoutes from './src/routes/userRoute.js'
import morgan from 'morgan';


const require = createRequire(import.meta.url);
const swaggerJSDoc = require('swagger-jsdoc');
const app = express();

app.use(cors());
app.use(corsFunction);
app.use(json());
app.use(morgan("dev"));

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Employee API",
      description: "Employee API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:9000"]
    }
  },
  apis: ["./src/routes/*.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(employeeRoutes)
app.use(userRoutes) 


// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});
