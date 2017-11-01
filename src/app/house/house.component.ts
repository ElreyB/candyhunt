import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Player } from "../player.model";
import { Storyline } from "../storyline.model";
import { STORYLINE } from "../mock-storyline";
import { PlayerService } from "../player.service";
import { StorylineService } from "../storyline.service";

@Component({
  selector: "app-house",
  templateUrl: "./house.component.html",
  styleUrls: ["./house.component.css"],
  providers: [StorylineService]
})
export class HouseComponent implements OnInit {
  sub;
  player: Player;
  storylines: Storyline[];
  storylineToDisplay: Storyline;
  storylineId: number;
  prankOrRing: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService,
    private storylineService: StorylineService
  ) {}

  ngOnInit() {
    this.storylines = this.storylineService.getStoryline();
    this.player = this.playerService.getPlayer();
    this.sub = this.route.params.subscribe(params => {
      this.storylineId = params["id"];
    });
    this.storylineToDisplay = this.storylineService.getStorylineById(
      this.storylineId
    );
    console.log(this.storylineToDisplay);
  }

  makeHouseChoice(direction) {
    if (direction === "left" && this.player.sideOfStreet === "right") {
      this.player.sideOfStreet = direction;
      this.player.location -= 4;
      this.walk();
    } else if (direction === "right" && this.player.sideOfStreet === "left") {
      this.player.sideOfStreet = direction;
      this.player.location += 6;
      this.walk();
    } else {
      this.player.location += 1;
      this.walk();
    }
    this.router.navigate(["house", this.player.location]);
    this.sub = this.route.params.subscribe(params => {
      this.storylineId = params["id"];
    });
    this.storylineToDisplay = this.storylineService.getStorylineById(
      this.storylineId
    );
  }

  trickOrTreat(choice) {
    this.prankOrRing = choice;
  }

  walk() {
    this.player.candyCount -= 1;
  }
}
