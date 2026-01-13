import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-figma-hero',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './figma-hero.component.html',
  styleUrl: './figma-hero.component.scss'
})
export class FigmaHeroComponent {
}
