import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Player } from "../player.model";
import { Storyline } from "../storyline.model";
import { STORYLINE } from "../mock-storyline";
import { PlayerService } from "../player.service";
import { StorylineService } from "../storyline.service";
import { COSTUMES, PRANKS, CANDY } from "../mock-characteristics";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
  providers: [PlayerService, StorylineService]
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

  ngOnInit() {
    // this.storyline = this.storylineService.getStorylineById();
  }

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
  }

  makeChoice(direction) {
    if (direction === 1) {
      this.player.location += 1;
    } else {
      this.player.location += 6;
    }
    console.log(this.player.location);
    this.router.navigate(["house", this.player.location]);
  }
}
