import { Injectable } from '@nestjs/common';
import { PostDTO } from './post.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(data: PostDTO) {
    const post = await this.prisma.posts.create({
      data,
    });

    return post;
  }

  async findAll() {
    return this.prisma.posts.findMany();
  }

  async findUnique(id: number, data: PostDTO) {
    const postId = parseInt(id.toString()); //Garantindo "Int" para id

    const postExists = await this.prisma.posts.findUnique({
      where: {
        id: postId,
      },
    });

    if (!postExists) {
      throw new Error('Post Not Found');
    }

    return await this.prisma.posts.findUnique({
      where: {
        id: postId,
      },
    });
  }

  async update(id: number, data: PostDTO) {
    const postId = parseInt(id.toString());
    const postExists = await this.prisma.posts.findUnique({
      where: {
        id: postId,
      },
    });

    if (!postExists) {
      throw new Error('Post does not exists');
    }

    return await this.prisma.posts.update({
      data,
      where: {
        id: postId,
      },
    });
  }

  async delete(id: number) {
    const postId = parseInt(id.toString());

    const postExists = await this.prisma.posts.findUnique({
      where: {
        id: postId,
      },
    });

    if (!postExists) {
      throw new Error('Post does not exists');
    }

    return await this.prisma.posts.delete({
      where: {
        id: postId,
      },
    });
  }
}
