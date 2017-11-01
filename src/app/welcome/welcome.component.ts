import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Player } from "../player.model";
import { Storyline } from "../storyline.model";
import { STORYLINE } from "../mock-storyline";
import { PlayerService } from "../player.service";
import { StorylineService } from '../storyline.service';
import { COSTUMES, PRANKS, CANDY } from '../mock-characteristics';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [StorylineService]
})
export class WelcomeComponent implements OnInit {
  player: Player;
  storyline: Storyline[];
  storylineId: number;
  costumes: string[];

  constructor(
    private playerService: PlayerService,
    private storylineService: StorylineService,
    private router: Router
  ) {}

  ngOnInit() {}

  getValueFromSelect(
    newName: string,
    selectedCostume: string,
    selectedPrank: string,
    selectedCandy: string
  ) {
    this.player = new Player(
      newName,
      selectedCostume,
      selectedPrank,
      selectedCandy
    );
    this.playerService.setPlayer(this.player);
    this.player = this.playerService.getPlayer();
  }

  makeChoice(direction) {
    this.player.sideOfStreet = direction;
    if (direction === 'left') {
      this.player.location += 1;
    } else {
      this.player.location += 6;
    }
    this.router.navigate(['house', this.player.location]);
  }
}
