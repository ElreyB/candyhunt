import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { Storyline } from '../storyline.model';
import { STORYLINE } from '../mock-storyline';
import { PlayerService } from '../player.service';
import { StorylineService } from '../storyline.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService, StorylineService]
})
export class WelcomeComponent implements OnInit {
  sub;
  player: Player;
  storyline: Storyline[];
  storylineId: number;

  constructor(
    private playerService: PlayerService,
    private storylineService: StorylineService
  ) { }

  ngOnInit() {
    this.player = this.playerService.getPlayer();
  }

}
