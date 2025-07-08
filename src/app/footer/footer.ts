import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  services = [
    'Web Design',
    'Video Production',
    'Digital Marketing',
    'Web Development',
    'UI/UX Design'
  ];

  companyLinks = [
    'About',
    'Services',
    'Portfolios',
    'Team',
    'Contact',
    'Licenses'
  ];

  socialLinks = [
    { name: 'Facebook', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Dribbble', url: '#' }
  ];

  contactInfo = {
    address: '177A Street charleston,',
    city: 'New York',
    phone: '+1 287-960-633',
    email: 'info@yourwebsite.com'
  };
}
