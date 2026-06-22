import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { WhoAreWe } from '../who-are-we/who-are-we';
import { Activities } from '../activities/activities';

@Component({
  selector: 'app-main-component',
  imports: [CommonModule, Navbar, WhoAreWe, Activities],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {}
