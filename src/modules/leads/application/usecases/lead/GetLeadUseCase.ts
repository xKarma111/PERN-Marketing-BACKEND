import { LeadRepository } from '../../../interface/LeadRepository'

export class GetAllLeadsUseCase {
    constructor(private leadRepository: LeadRepository) { }

    async execute() {
        return this.leadRepository.findAll()
    }
}