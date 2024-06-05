import { Body, Controller, Get, Param, Post, Put, HttpCode, Patch, Delete, HttpStatus } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDTO } from './dto/create-contacts.dto';
import { UpdateContactDTO } from './dto/update-contacts.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id)
  }


  @Post()
  create(@Body() createContactDTO: CreateContactDTO) {
    return this.contactsService.create(createContactDTO)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateContactDTO: UpdateContactDTO) {
    return this.contactsService.update(id, updateContactDTO);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string){
   return this.contactsService.remove(id) 
  }
}

