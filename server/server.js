import express from 'express'
import './config/dotenv.js';
import champsRouter from './routes/events.js'
import cors from 'cors'

const app = express()

app.use(cors());

app.use('/events', champsRouter)

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})