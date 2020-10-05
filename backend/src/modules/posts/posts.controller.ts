import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/modules/auth/get-user.decorator';
import { User } from 'src/modules/auth/user.entity';
import { PostsService } from './posts.service';
import { TaskStatusValidation } from './pipes/posts-status.validation.pipe';
import { TaskStatus } from './tasks.status-enum';
import { Logger } from '@nestjs/common';
import { CreatePostsDto } from './dto/create-post.dto';
import { Posts } from './posts.entity';
import { PostsFilterDto } from './dto/posts.filter.dto';

@Controller('posts')
export class PostsController {
  private logger = new Logger('TasksController');
  constructor(private taskService: PostsService) {}
  @Get()
  @UseGuards(AuthGuard())
  async getTasks(
    @Query(ValidationPipe) tasksFilterDto: PostsFilterDto,
    @GetUser() user: User,
  ): Promise<any> {
    this.logger.verbose(
      `'${user.username}' retrieving all tasks. Filter: ${JSON.stringify(
        tasksFilterDto,
      )}`,
    );
    return this.taskService.getAllTasks(tasksFilterDto, user);
  }

  @Get('/:id')
  @UseGuards(AuthGuard())
  getTaskById(@Param('id') id: number, @GetUser() user: any): Promise<Posts> {
    return this.taskService.getTaskById(id, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard())
  createTask(
    @Body() createTaskDto: CreatePostsDto,
    @GetUser() user: User,
  ): Promise<Posts> {
    return this.taskService.createTasks(createTaskDto, user);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  deleteOneTask(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.taskService.deleteOneTask(id, user);
  }

  @Patch('/:id/status')
  @UseGuards(AuthGuard())
  async updateTaskStatus(
    @Param('id') id: number,
    @Body('status', TaskStatusValidation) status: TaskStatus,
    @GetUser() user: User,
  ): Promise<Posts> {
    return await this.taskService.updateTaskStatus(id, status, user);
  }
}
