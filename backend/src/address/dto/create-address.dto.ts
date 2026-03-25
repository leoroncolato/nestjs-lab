import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({ example: 'Rua das Flores' })
  @IsString()
  @IsNotEmpty() // Adicionado
  street: string;

  @ApiProperty({ example: 123 })
  @IsInt()
  @IsNotEmpty() // Adicionado
  number: number;

  @ApiProperty({ example: 'São Paulo' })
  @IsString()
  @IsNotEmpty() // Adicionado
  city: string;

  @ApiProperty({ example: 'SP' })
  @IsString()
  @IsNotEmpty() // Adicionado
  state: string;

  @ApiProperty({ example: '01234-567' })
  @IsString()
  @IsNotEmpty() // Adicionado
  zipCode: string;

  @ApiProperty({ example: 'uuid-do-usuario' })
  @IsUUID() // Alterado de IsString para IsUUID
  @IsNotEmpty()
  userId: string;
}