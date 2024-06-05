import { PartialType } from "@nestjs/mapped-types"          // pacote de mapeando que auxilia a nossa classe a pegar sempre as mesmas informações que serao extendidas
import { CreateContactDTO } from "./create-contacts.dto";   // da classe create que carrega os mesmo dados 
                                                   
export class UpdateContactDTO extends PartialType(CreateContactDTO) {}