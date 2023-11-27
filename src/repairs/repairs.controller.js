const RepairsServices = require("./repairs.services");

const findAllMotos = async (req, res) => {
    try {
        const { requestTime } = req;

        const repairs = await RepairsServices.findAll();

        return res.status(200).json({
            date: requestTime,
            repairs,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "something went very wrong",
            error,
        });
    }
};

const createMotos = async (req, res) => {
    try {
        const { requestTime } = req;
        const { date, status, userId } = req.body;

        const repairs = await RepairsServices.create({
            date,
            status,
            userId,
        });

        return res.status(201).json({
            date: requestTime,
            repairs,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "something went very wrong",
            error,
        });
    }
};

const findOneMoto = async (req, res) => {
    try {
        //console.log(req.params);
        const { requestTime } = req;
        const { id } = req.params;

        const repair = await RepairsServices.findOne(id);

        if (!repair) {
            return res.status(404).json({
                status: "error",
                message: `user with id ${id} not found`,
            });
        }

        return res.status(200).json({
            date: requestTime,
            repair,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "something went very wrong",
            error,
        });
    }
};

const updateMoto = async (req, res) => {
    try {
        const { id } = req.params;
        const { requestTime } = req;
        const { status } = req.body;

        const repair = await RepairsServices.findOne(id);

        if (!repair) {
            return res.status(404).json({
                status: "error",
                message: `user with id ${id} not found`,
            });
        }

        const repairUpdate = await RepairsServices.update(repair, { status });

        return res.status(200).json({
            date: requestTime,
            repairUpdate,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "something went very wrong",
            error,
        });
    }
};

const deleteMoto = async (req, res) => {
    try {
        const { id } = req.params;

        const repair = await RepairsServices.findOne(id);

        if (!repair) {
            return res.status(404).json({
                status: "error",
                message: `user with id ${id} not found`,
            });
        }

        await RepairsServices.delete(repair);

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
    findAllMotos,
    createMotos,
    findOneMoto,
    updateMoto,
    deleteMoto,
};
