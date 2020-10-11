import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { sanitizeResponseObject } from 'src/core/helpers/sanitize-payload';
import { AuthService } from '../services/auth.service';
import { AuthDto } from '../dtos/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  async register(@Body() authDto: AuthDto): Promise<{ accessToken: string }> {
    const user = await this.authService.register(authDto);
    return sanitizeResponseObject(user);
  }
  @Post('/login')
  @UsePipes(ValidationPipe)
  async login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }
  @Get('/users')
  async getUsers() {
    const users = await this.authService.getusers();
    return sanitizeResponseObject(users);
  }
  @Get('/users/:id')
  async getOneUser(@Param() param) {
    const user = await this.authService.getOneUser(param.id);
    return sanitizeResponseObject(user);
  }
  @Put('/users/:id/update')
  async updateUser(@Param() param, @Body() body) {
    const user = await this.authService.editUser(param.id, body);
    return sanitizeResponseObject(user);
  }
}
