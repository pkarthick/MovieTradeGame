import { Component, OnInit, Input } from '@angular/core';
import { Site } from './Site';

@Component({
  selector: 'app-sites',
  templateUrl: 'sites.component.html'
})

export class SitesComponent implements OnInit {

  @Input() sites: Site[] = [];

  constructor() { }

  ngOnInit() { }

}
