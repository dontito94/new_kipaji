import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './services/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsRepository } from './shared/post.repository';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([PostsRepository]), AuthModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class TasksModule {}
