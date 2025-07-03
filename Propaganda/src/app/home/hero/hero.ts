import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  rating = 4.9;
  reviewCount = '2.5k+';
  description = 'We are a creative agency that specializes in providing high-quality design and branding solutions to businesses';
}