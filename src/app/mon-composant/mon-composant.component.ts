import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MonComposantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
