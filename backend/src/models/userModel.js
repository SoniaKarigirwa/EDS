import { Sequelize } from '../utils/database.js';
import { DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: "mysql",
  username: "root",
  password: "",
  database: "equipment_distribution_sys",
  host: "localhost",
  port: 3306
})

const UserModel = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    selectable: false,
  },
},{
    timestamps:true,
  },
);

UserModel.sync({ alter: true })
  .then(() => {
    console.log("Data table created successfully");
  })
  .catch((error) => {
    console.error("Error creating Data table:", error);
  });

export default UserModel