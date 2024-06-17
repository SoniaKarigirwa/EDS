import { getAllUsers, getUserById, createUser, updateUserById, deleteUserById }  from '../controllers/userController.js';
import express from 'express';



const userRoutes = express();

userRoutes.get('/users', getAllUsers)
userRoutes.get('/user/:id', getUserById)
userRoutes.post('/users/addUser', createUser)
userRoutes.put('/users/updateUser/:id', updateUserById)
userRoutes.delete('./users/deleteUser/:id', deleteUserById)

export default userRoutes