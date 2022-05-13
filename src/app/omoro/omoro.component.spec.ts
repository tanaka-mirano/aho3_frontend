import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmoroComponent } from './omoro.component';

describe('OmoroComponent', () => {
  let component: OmoroComponent;
  let fixture: ComponentFixture<OmoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmoroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
