import {Injectable, NotFoundException } from '@nestjs/common';
import { Contact } from './entities/contacts.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactsService {

    constructor(
        @InjectRepository(Contact)
        private readonly contactRepository: Repository<Contact>
    ) {}



    async findAll() {
        return this.contactRepository.find()
    }

    async findOne(id: string) {
        const contact = await this.contactRepository.findOne({
            where:{id},
        })

        if (!contact) {
            throw new NotFoundException(`Contact ID: ${id} not found`)
        }
        return contact
    }

    create(createCourseDTO: any) {
       const contact = this.contactRepository.create(createCourseDTO)
        return this.contactRepository.save(contact)
    }

    async update(id: string, updateContactDTO: any) {
        const contact = await this.contactRepository.preload({
            ...updateContactDTO,
            id
        })
        if (!contact) {
            throw new NotFoundException(`Contact ID: ${id} not found`)
        }
        return this.contactRepository.save(contact)
    }

    async remove(id: string) {
        const contact = await this.contactRepository.findOne({
            where: {id}
        })
        if (!contact) {
            throw new NotFoundException(`Contact ID: ${id} not found`)
        }
        return this.contactRepository.remove(contact)
}
}

