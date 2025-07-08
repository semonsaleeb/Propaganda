import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  imports: [CommonModule],
  templateUrl: './partner.html',
  styleUrl: './partner.scss'
})
export class Partner{
  logos: string[] = [
    'assets/Images/logo1.svg',
    'assets/Images/logo2.svg',
    'assets/Images/logo3.svg',
    'assets/Images/logo4.svg',
    'assets/Images/logo5.svg',
  ];
}


