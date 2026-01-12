import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaHeroComponent } from './figma-hero.component';

describe('FigmaHeroComponent', () => {
  let component: FigmaHeroComponent;
  let fixture: ComponentFixture<FigmaHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigmaHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigmaHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
