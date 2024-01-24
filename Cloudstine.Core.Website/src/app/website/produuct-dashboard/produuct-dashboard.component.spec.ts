import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduuctDashboardComponent } from './produuct-dashboard.component';

describe('ProduuctDashboardComponent', () => {
  let component: ProduuctDashboardComponent;
  let fixture: ComponentFixture<ProduuctDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduuctDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduuctDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
