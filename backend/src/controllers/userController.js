import { getUsers, getUser, addUser, updateUser, deleteUser } from "../service/userService.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await getUsers();
        res.send(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const users = await getUser(id);
        res.send(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await addUser(username, password);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateUserById = async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = await updateUser(username, password);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteUserById = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await deleteUser(id);
        res.status(201).send(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}








