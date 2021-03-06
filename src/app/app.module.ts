import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';

@NgModule({
  declarations: [MonComposantComponent, AppComponent],
  imports: [BrowserModule],
  // bootstrap: [AppComponent],
  entryComponents: [MonComposantComponent, AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }
  ngDoBootstrap(): void {
    this.createWebComponent(MonComposantComponent, 'mon-composant');
  }
  createWebComponent(component, name: string) {
    const el = createCustomElement(component, {
      injector: this.injector
    });
    customElements.define(name, el);
  }
}
