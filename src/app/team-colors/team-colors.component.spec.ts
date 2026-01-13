import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamColorsComponent } from './team-colors.component';

describe('TeamColorsComponent', () => {
  let component: TeamColorsComponent;
  let fixture: ComponentFixture<TeamColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
