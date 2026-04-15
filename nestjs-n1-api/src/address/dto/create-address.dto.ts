import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateAddressDto {
    @ApiProperty({ example: 'Rua das Flores' })
    @IsString() @IsNotEmpty()
    street: string;
    @ApiProperty({ example: 123 })
    @IsInt()
    number: number;
    @ApiProperty({ example: 'Goiânia' })
    @IsString() @IsNotEmpty()
    city: string;
    @ApiProperty({ example: 'GO' })
    @IsString() @IsNotEmpty()
    state: string;
    @ApiProperty({ example: '74000-000' })
    @IsString() @IsNotEmpty()
    zipCode: string;
    @ApiProperty({ example: 'uuid-do-usuario' })
    @IsString() @IsNotEmpty()
    userId: string;
}
