import { pool } from '../config/database.js'

const getEventByLocation = async (req, res) => {
    try {
        const location = req.params.location;
        const results = await pool.query('SELECT * FROM events WHERE location = $1', [location]);
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}


const dummy = async (req, res) => {
    res.status(200).json({})
}
export default {
    getEventByLocation,
    dummy
}