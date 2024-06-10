import { IsDecimal, IsNumber, IsString} from "class-validator"


export class CreateContactDTO {
    @IsString()
    readonly name: string

    @IsString()
    readonly type: string

    @IsString()
    readonly number: string

    @IsString()
    readonly address: string

    @IsString()
    readonly latitude: string

    @IsString()
    readonly longitude: string
}