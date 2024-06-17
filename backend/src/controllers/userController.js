import UserModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        res.send(users);
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const users = await UserModel.findOne({ id });
        res.send(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.create({
            username,
            password
        });
        res.status(201).send(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateUserById = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.update({ username, password }, { where: { id: req.params.id } });
        res.status(201).send(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.destroy({ where : { id }});
        res.status(201).send(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}










