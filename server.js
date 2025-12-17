// import connectDb from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDb from "./Db/db.js";
import route from './Routes/routes.js';

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

// middle wares
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())

// http://localhost:3000/taskmanager
app.use('/taskmanager', route);

// Connect to database and start server
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`);
    })
}).catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
})

