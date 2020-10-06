import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/auth/entities/user.entity';
import { EntityRepository } from 'typeorm';
import { CreatePostsDto } from '../dto/create-post.dto';
import { PostsFilterDto } from '../dto/posts.filter.dto';
import { PostsRepository } from '../shared/post.repository';
import { Posts } from '../entities/posts.entity';
import { TaskStatus } from '../shared/tasks.status-enum';

@EntityRepository(Posts)
export class PostsService {
  constructor(
    @InjectRepository(PostsRepository)
    private taskRepository: PostsRepository,
  ) {}

  async getAllTasks(postsFilterDto: PostsFilterDto, user: any): Promise<any> {
    const { status, search } = postsFilterDto;
    const query = this.taskRepository.createQueryBuilder('task');

    query.where('task.userId=:userId', { userId: user.id });
    if (status) {
      query.andWhere('task.status=:status', { status });
    }
    if (search) {
      query.andWhere(
        '(task.title LIKE :search OR task.description LIKE :search)',
        { search: `%${search}%` },
      );
    }
    const tasks = query.getMany();
    return tasks;
  }

  async getTaskById(id: number, user: any): Promise<Posts> {
    const found = await this.taskRepository.findOne({
      where: { id, userId: user.id },
    });
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return found;
  }

  async createTasks(createTaskDto: CreatePostsDto, user: User): Promise<Posts> {
    return await this.taskRepository.createPosts(createTaskDto, user);
  }

  async deleteOneTask(id: number, user: any): Promise<any> {
    const found = await this.taskRepository.delete({ id, userId: user.id });
    if (found.affected === 0) {
      throw new NotFoundException(`Can not delete task with ID ${id} `);
    }
    return found;
  }

  async updateTaskStatus(
    id: number,
    status: TaskStatus,
    user: User,
  ): Promise<Posts> {
    const task = await this.getTaskById(id, user);
    task.status = status;
    await task.save();
    return task;
  }
}
