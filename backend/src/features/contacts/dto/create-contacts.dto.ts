import { IsString} from "class-validator"


export class CreateContactDTO {
    @IsString()
    readonly name: string

    @IsString()
    readonly type: string

    @IsString()
    readonly number: string
}