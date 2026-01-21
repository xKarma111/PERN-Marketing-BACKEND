import { LeadRepository } from '../../../interface/LeadRepository'
import { CreateLeadDTO } from '../../../dto/CreateLeadDTO'


export class CreateLeadUseCase {
    constructor(private leadRepository: LeadRepository) { }

    async execute(data: CreateLeadDTO) {
        const exists = await this.leadRepository.findByEmail(data.email)

        if (exists) {
            throw new Error('Lead already exists')
        }

        return this.leadRepository.create(data)
    }
}
