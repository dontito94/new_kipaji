import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  async register(@Body() authDto: AuthDto): Promise<{ accessToken: string }> {
    return await this.authService.register(authDto);
  }
  @Post('/login')
  @UsePipes(ValidationPipe)
  async login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }
}
