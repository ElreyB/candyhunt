import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  player: Player;
  constructor() {
  }

  getPlayer() {
    return this.player;
  }

}
