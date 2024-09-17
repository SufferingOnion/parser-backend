import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'email@test.io', description: 'User email address' })
  @IsString({message: 'email field must be string'})
  @IsEmail({},{message: 'Incorrect email'})
  readonly email: string;
  @ApiProperty({ example: '12345', description: 'User pass' })
  @IsString({message: 'password field must be string'})
  @Length(4, 16, {message: 'password field length must be between 4 and 16'})
  readonly password: string;
}
