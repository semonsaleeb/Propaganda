import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './home/hero/hero';
import { CommonModule } from '@angular/common';
import { Workspace } from './home/workspace/workspace';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, Hero, Workspace],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Propaganda';
}
