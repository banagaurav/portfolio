import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillCategoriesService } from './skill-categories.service';
import { CreateSkillCategoryDto } from './dto/create-skill-category.dto';
import { UpdateSkillCategoryDto } from './dto/update-skill-category.dto';

@Controller('skill-categories')
export class SkillCategoriesController {
  constructor(private readonly skillCategoriesService: SkillCategoriesService) {}

  @Post()
  create(@Body() createSkillCategoryDto: CreateSkillCategoryDto) {
    return this.skillCategoriesService.create(createSkillCategoryDto);
  }

  @Get()
  findAll() {
    return this.skillCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillCategoryDto: UpdateSkillCategoryDto) {
    return this.skillCategoriesService.update(+id, updateSkillCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillCategoriesService.remove(+id);
  }
}
