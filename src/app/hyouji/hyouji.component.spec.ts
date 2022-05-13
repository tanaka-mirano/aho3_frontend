import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyoujiComponent } from './hyouji.component';

describe('HyoujiComponent', () => {
  let component: HyoujiComponent;
  let fixture: ComponentFixture<HyoujiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyoujiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyoujiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
