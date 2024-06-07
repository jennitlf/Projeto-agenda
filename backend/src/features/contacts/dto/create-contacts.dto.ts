import { IsDecimal, IsNumber, IsString} from "class-validator"


export class CreateContactDTO {
    @IsString()
    readonly name: string

    @IsString()
    readonly type: string

    @IsString()
    readonly number: string

    @IsString()
    readonly addrass: string

    @IsDecimal({decimal_digits: '6'})
    readonly lat: number

    @IsDecimal({decimal_digits: '6'})
    readonly long: number
}