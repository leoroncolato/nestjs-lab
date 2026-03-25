import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({ example: 'Rua das Flores' })
  @IsString()
  street: string;

  @ApiProperty({ example: 123 })
  @IsInt()
  number: number;

  @ApiProperty({ example: 'São Paulo' })
  @IsString()
  city: string;

  @ApiProperty({ example: 'SP' })
  @IsString()
  state: string;

  @ApiProperty({ example: '01234-567' })
  @IsString()
  zipCode: string;

  @ApiProperty({ example: 'uuid-do-usuario' })
  @IsString()
  @IsNotEmpty()
  userId: string;
}