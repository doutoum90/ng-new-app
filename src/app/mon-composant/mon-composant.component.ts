import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mon-composant',
  template: 'Hello world!!',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MonComposantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
