import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDTO } from './post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // HTTP Methods
  @Post()
  async create(@Body() data: PostDTO) {
    return this.postService.create(data);
  }

  @Get()
  async findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  async findUnique(@Param('id') id: number, @Body() data: PostDTO) {
    return this.postService.findUnique(id, data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: PostDTO) {
    return this.postService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.postService.delete(id);
  }
}
