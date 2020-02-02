import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartCardComponent } from './appart-card.component';

describe('AppartCardComponent', () => {
  let component: AppartCardComponent;
  let fixture: ComponentFixture<AppartCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
