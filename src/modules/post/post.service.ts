import { Injectable } from '@nestjs/common';
import { PostDTO } from './post.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(data: PostDTO) {
    const post = await this.prisma.post.create({
      data,
    });

    return post;
  }

  async findAll() {
    return this.prisma.post.findMany();
  }

  async findUnique(id: number) {
    const postId = parseInt(id.toString()); //Garantindo "Int" para id

    const postExists = await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!postExists) {
      throw new Error('Post Not Found');
    }

    return await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
  }

  async update(id: number, data: PostDTO) {
    const postId = parseInt(id.toString());
    const postExists = await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!postExists) {
      throw new Error('Post does not exists');
    }

    return await this.prisma.post.update({
      data,
      where: {
        id: postId,
      },
    });
  }

  async delete(id: number) {
    const postId = parseInt(id.toString());

    const postExists = await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!postExists) {
      throw new Error('Post does not exists');
    }

    return await this.prisma.post.delete({
      where: {
        id: postId,
      },
    });
  }
}
