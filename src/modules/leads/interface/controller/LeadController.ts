import { Request, Response } from 'express'
import { CreateLeadUseCase } from '../../application/usecases/lead/CreateLeadUseCase'
import { GetAllLeadsUseCase } from '../../application/usecases/lead/GetLeadUseCase'


export class LeadController {
    constructor(
        private createLeadUseCase: CreateLeadUseCase,
        private getAllLeadsUseCase: GetAllLeadsUseCase 
    ) {}

    async create(req: Request, res: Response) {
        try {
            const lead = await this.createLeadUseCase.execute(req.body)
            return res.status(201).json(lead)
        } catch (err: any) {
            return res.status(400).json({ message: err.message })
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const leads = await this.getAllLeadsUseCase.execute()
            return res.status(200).json(leads)
        } catch {
            return res.status(500).json({ message: 'Failed to fetch leads' })
        }
    }
}