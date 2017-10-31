import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { Storyline } from '../storyline.model';
import { STORYLINE } from '../mock-storyline';
import { PlayerService } from '../player.service';
import { StorylineService } from '../storyline.service';
import { COSTUMES, PRANKS, CANDY } from '../mock-characteristics';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService, StorylineService]
})
export class WelcomeComponent implements OnInit {
  player: Player;
  storyline: Storyline[];
  storylineId: number;
  costumes: string[];

  constructor(
    private playerService: PlayerService,
    private storylineService: StorylineService
  ) { }

  ngOnInit() {
    // this.player = this.playerService.getPlayer();
  }

}
