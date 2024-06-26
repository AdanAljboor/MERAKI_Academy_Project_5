const { pool } = require("../models/db");




const createServiceProvider = (req, res) => {
    const { title, description, address, img, category_id } = req.body
    pool
        .query(`INSERT INTO service_provider(title,description,address,img,category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [title, description, address, img, category_id]
        )
        .then((result) => {
            res.status(201).json({
                success: true,
                message: "Service Provider added successfully",
                product: result.rows,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({
                success: false,
                message: "Something went wrong",
                err,
            });
        })
};


//=========================================

const updateServiceProviderById = (req, res) => {
    const { id } = req.params;

    const { title, description, address, img, category_id } = req.body;

    const data = [title || null, description || null, address || null, img || null, category_id || null, id];

    const query = `UPDATE service_provider SET title=COALESCE($1,title),description=COALESCE($2,description),address=COALESCE($3,address),img=COALESCE($4,img),category_id=COALESCE($5,category_id) WHERE id=$6 RETURNING *;`
    pool
        .query(query, data)
        .then((result) => {
            if (result.rows.length) {
                return res.status(201).json({
                    success: true,
                    massage: "Service Provider is Updated Successfully",
                    result: result.rows,
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "No service provider found with the provided ID"
                });
            }

        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: `Server error`,
                error: error.message,
            });
        });
};


//=================================================


const readAllServiceProvider = (req, res) => {
    pool
        .query(`SELECT * FROM service_provider WHERE is_deleted = 0`)
        .then((result) => {
            if (result.rows.length > 0) {
                res.status(200).json({
                    success: true,
                    message: `All the Service Providers`,
                    result: result.rows,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: `No service providers found`,
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: `Server error`,
                error: err.message,
            });
        });
};





//=========================================


const deleteServiceProvider = (req, res) => {
    const { id } = req.params;
    pool
        .query(`UPDATE service_provider SET is_deleted = 1 WHERE id = $1 RETURNING *`, [id])
        .then((result) => {
            if (result.rows.length) {
                return res.status(201).json({
                    success: true,
                    massage: "Service Provider is Deleted Successfully",
                    result: result.rows,
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "No service provider found with the provided ID"
                });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: `Server error`,
                error: error.message,
            });
        })

};


module.exports = {
    createServiceProvider,
    updateServiceProviderById,
    readAllServiceProvider,
    deleteServiceProvider
};