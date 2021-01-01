import { Component, OnInit, Input } from '@angular/core';
import { PlayerInfo } from './Site';

@Component({
  selector: 'app-player',
  templateUrl: 'player.component.html'
})

export class PlayerComponent implements OnInit {

  @Input() player: PlayerInfo;

  constructor() { }

  ngOnInit() { }
}
