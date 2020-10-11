import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../shared/user.repository';
import { EntityRepository } from 'typeorm';
import { User } from '../entities/user.entity';
import { AuthDto } from '../dtos/auth-credentials.dto';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../shared/jtwpayload';
@EntityRepository(User)
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async register(authDto: AuthDto): Promise<{ accessToken: string }> {
    return this.userRepository.register(authDto);
  }
  async login(authDto: AuthDto) {
    const username = await this.userRepository.validateUserPassword(authDto);
    if (!username) {
      throw new UnauthorizedException('Invalid access credentials');
    }
    const payload: JwtPayload = { username };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
  async getusers() {
    const users = await this.userRepository.find();
    return { users: users };
  }
  async getOneUser(uid: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { uid: uid } });
    return user;
  }
  async editUser(uid: string, edituserDTO: AuthDto): Promise<any> {
    const { password } = edituserDTO;

    const user = await this.userRepository.findOne({ uid });
    Object.keys(edituserDTO).forEach(key => {
      user[key] = edituserDTO[key];
    });
    user.password = await this.userRepository.hashPassword(password, user.salt);
    const usersaved = await this.userRepository.save(user);
    return usersaved;
  }
}
