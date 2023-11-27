const Users = require("./users.model");

class UsersServices {
    static async findAll(data) {
        return await Users.findAll({
            where: {
                status: "available",
            },
        });
    }

    static async create(data) {
        const users = await Users.create(data);
        return users;
    }

    static async findOne(id) {
        return await Users.findOne({
            where: {
                id: id,
                status: "available",
            },
        });
    }

    static async update(user, data) {
        return await user.update(data);
    }

    static async delete(user) {
        return await user.update({
            status: "disabled",
        });
    }
}

module.exports = UsersServices;
