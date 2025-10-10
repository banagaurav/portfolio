import { Test, TestingModule } from '@nestjs/testing';
import { SkillCategoriesController } from './skill-categories.controller';
import { SkillCategoriesService } from './skill-categories.service';

describe('SkillCategoriesController', () => {
  let controller: SkillCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillCategoriesController],
      providers: [SkillCategoriesService],
    }).compile();

    controller = module.get<SkillCategoriesController>(SkillCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
