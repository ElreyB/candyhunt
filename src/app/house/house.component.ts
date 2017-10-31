import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { Storyline } from '../storyline.model';
import { STORYLINE } from '../mock-storyline';
import { PlayerService } from '../player.service';
import { StorylineService } from '../storyline.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
  providers: [PlayerService, StorylineService]
})
export class HouseComponent implements OnInit {
  sub;
  player: Player;
  storyline: Storyline;
  storylineId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService,
    private storylineService: StorylineService
  ) { }

  ngOnInit() {
    this.player = this.playerService.getPlayer();
    this.sub = this.route.params.subscribe(params => {
      this.storylineId = params['id'];
      this.storyline = this.storylineService.getStorylineById(this.storylineId);
    });
  }

}
