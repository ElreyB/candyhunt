import { TestBed, inject } from '@angular/core/testing';

import { StorylineService } from './storyline.service';

describe('StorylineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorylineService]
    });
  });

  it('should ...', inject([StorylineService], (service: StorylineService) => {
    expect(service).toBeTruthy();
  }));
});
