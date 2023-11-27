const UsersServices = require("./users.services");

//ToDo definir funciones
const findAllUsers = async (req, res) => {
    try {
        const { requestTime } = req;

        const users = await UsersServices.findAll();

        return res.status(200).json({
            date: requestTime,
            users,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "something went very wrong",
            error,
        });
    }
};

const createUsers = async (req, res) => {
    try {
        const { requestTime } = req;
        const { name, email, password, role, status } = req.body;

        const users = await UsersServices.create({
            name,
            email,
            password,
            role,
            status,
        });

        // if(users.email) {
        //     return res.json({
        //         status: "error",
        //         message: "User already exists"
        //     })
        // }

        return res.status(201).json({
            date: requestTime,
            users,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "something went very wrong",
            error,
        });
    }
};

const findOneUser = async (req, res) => {
    try {
        //console.log(req.params);
        const { requestTime } = req;
        const { id } = req.params;

        const user = await UsersServices.findOne(id);

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: `user with id ${id} not found`,
            });
        }

        return res.status(200).json({
            date: requestTime,
            user,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "something went very wrong",
            error,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { requestTime } = req;
        const { name, email } = req.body;

        const user = await UsersServices.findOne(id);

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: `user with id ${id} not found`,
            });
        }

        const userUpdate = await UsersServices.update(user, { name, email });

        return res.status(200).json({
            date: requestTime,
            userUpdate,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "something went very wrong",
            error,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UsersServices.findOne(id);

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: `user with id ${id} not found`,
            });
        }

        await UsersServices.delete(user);

        return res.status(204).json(null);
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "something went very wrong",
            error,
        });
    }
};

module.exports = {
    findAllUsers,
    createUsers,
    findOneUser,
    updateUser,
    deleteUser,
};
