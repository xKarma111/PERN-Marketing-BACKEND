import { Router } from 'express'
import { PrismaLeadRepository } from '../../infrastracture/repositories/PrismaLeadRepository'
import { CreateLeadUseCase } from '../../application/usecases/lead/CreateLeadUseCase'
import { GetAllLeadsUseCase } from '../../application/usecases/lead/GetLeadUseCase'
import { LeadController } from '../controller/LeadController'


const router = Router()


const repository = new PrismaLeadRepository()
const createLeadUseCase = new CreateLeadUseCase(repository)
const getAllLeadsUseCase = new GetAllLeadsUseCase(repository)
const controller = new LeadController(createLeadUseCase, getAllLeadsUseCase)


router.post('/', (req, res) => controller.create(req, res))
router.get('/', (req, res) => controller.getAll(req, res))


export { router as leadRoutes }