import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComposantComponent } from './mon-composant.component';

describe('MonComposantComponent', () => {
  let component: MonComposantComponent;
  let fixture: ComponentFixture<MonComposantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonComposantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
