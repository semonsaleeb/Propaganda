import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './home/hero/hero';
import { CommonModule } from '@angular/common';
import { Workspace } from './home/workspace/workspace';
import { UsersAndGroups } from './home/users-and-groups/users-and-groups';
import { Mediazone } from './home/mediazone/mediazone';
import { Pricing } from './home/pricing/pricing';
import { OurClient } from './home/our-client/our-client';
import { Team } from './home/team/team';
import { Partner } from './home/partner/partner';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, Footer, Hero, Workspace, UsersAndGroups, Mediazone, Pricing, Partner, OurClient, Team],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Propaganda';
}
