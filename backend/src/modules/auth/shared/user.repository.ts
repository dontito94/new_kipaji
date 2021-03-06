import { ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { generateUid } from 'src/core/helpers/generate-uid';
import { EntityRepository, Repository } from 'typeorm';
import { AuthDto } from '../dtos/auth-credentials.dto';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async register(authDto: AuthDto): Promise<any> {
    const {
      password,
      username,
      firstname,
      lastname,
      city,
      country,
      profession,
      mobilenumber,
      homenumber,
    } = authDto;
    const user = new User();
    user.salt = await bcrypt.genSalt();
    user.username = username;
    user.password = await this.hashPassword(password, user.salt);
    user.uid = generateUid();
    user.firstname = firstname;
    user.lastname = lastname;
    user.city = city;
    user.country = country;
    user.profession = profession;
    user.mobilenumber = mobilenumber;
    user.homenumber = homenumber;

    try {
      await user.save();
      return user;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      }
      return { error: error.message };
    }
  }
  async hashPassword(password, salt): Promise<string> {
    return await bcrypt.hash(password, salt);
  }

  async validateUserPassword(authDto: AuthDto): Promise<string> {
    const { username, password } = authDto;

    const user = await this.findOne({ username });
    if (user && (await user.validatePassword(password))) {
      return user.username;
    } else {
      return null;
    }
  }
}
