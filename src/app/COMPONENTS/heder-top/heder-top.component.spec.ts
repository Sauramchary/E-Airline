import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HederTopComponent } from './heder-top.component';

describe('HederTopComponent', () => {
  let component: HederTopComponent;
  let fixture: ComponentFixture<HederTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HederTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HederTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
