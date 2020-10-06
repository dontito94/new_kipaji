import { BadRequestException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePostsDto } from '../dto/create-post.dto';
import { Posts } from '../entities/posts.entity';

@EntityRepository(Posts)
export class PostsRepository extends Repository<Posts> {
  async createPosts(createPosts: CreatePostsDto, user: any): Promise<Posts> {
    const { title, description } = createPosts;
    const post = new Posts();
    // Object.keys(createPosts).forEach(key => {
    //   Posts[key] = createPosts[key];
    // });
    post.title = title;
    post.description = description;
    post.user = user;
    if (user) {
      await post.save();
    } else {
      throw new BadRequestException('User can never be null');
    }
    delete post.user;
    return post;
  }
}
