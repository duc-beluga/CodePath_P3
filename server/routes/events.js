import express from 'express'
import EventsController from '../controllers/events.js'

const router = express.Router()

router.get('/:location', EventsController.getEventByLocation)

router.get('/', EventsController.dummy)

export default router