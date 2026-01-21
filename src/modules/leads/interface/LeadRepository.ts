import { Lead } from '@prisma/client'
import { CreateLeadDTO } from '../dto/CreateLeadDTO'


export interface LeadRepository {
    create(data: CreateLeadDTO): Promise<Lead>
    findByEmail(email: string): Promise<Lead | null>
    findAll(): Promise<Lead[]>
}