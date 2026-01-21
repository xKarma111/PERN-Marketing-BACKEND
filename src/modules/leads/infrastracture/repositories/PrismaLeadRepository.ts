import { LeadRepository } from '../../interface/LeadRepository'
import { prisma } from '../../../../config/prisma'
import { CreateLeadDTO } from '../../dto/CreateLeadDTO'
import { Lead } from '@prisma/client'


export class PrismaLeadRepository implements LeadRepository {
    async create(data: CreateLeadDTO): Promise<Lead> {
        return prisma.lead.create({ data })
    }


    async findByEmail(email: string): Promise<Lead | null> {
        return prisma.lead.findUnique({ where: { email } })
    }

    async findAll(): Promise<Lead[]> {
        return prisma.lead.findMany({
            orderBy: { createdAt: 'desc' },
        })
    }
}