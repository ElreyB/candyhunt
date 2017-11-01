import { Injectable } from "@angular/core";
import { Player } from "./player.model";

@Injectable()
export class PlayerService {
  player: Player;
  constructor() {
    console.log("I am constructor");
  }

  setPlayer(playerDetails: Player) {
    console.log("i set player");
    this.player = playerDetails;
  }

  getPlayer() {
    console.log("i grab player", this.player);
    return this.player;
  }
}
