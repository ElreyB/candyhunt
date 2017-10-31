import { Injectable } from '@angular/core';
import { Storyline } from './storyline.model';
import { STORYLINE } from './mock-storyline';

@Injectable()
export class StorylineService {

  constructor() { }

  getStoryline() {
    return STORYLINE;
  }

  getStorylineById(storylineId: number){
    for (var i = 0; i <= STORYLINE.length -1; i++) {
      if (STORYLINE[i].id === storylineId) {
        return STORYLINE[i];
      }
    }
  }

}
