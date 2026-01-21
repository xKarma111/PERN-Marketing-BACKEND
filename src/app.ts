import express from 'express'
import cors from 'cors'
import { leadRoutes } from './modules/leads/interface/routers/lead.routes'


export const app = express()


app.use(cors())
app.use(express.json())


app.use('/api/leads', leadRoutes)