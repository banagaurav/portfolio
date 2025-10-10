import { Test, TestingModule } from '@nestjs/testing';
import { SkillCategoriesService } from './skill-categories.service';

describe('SkillCategoriesService', () => {
  let service: SkillCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkillCategoriesService],
    }).compile();

    service = module.get<SkillCategoriesService>(SkillCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
