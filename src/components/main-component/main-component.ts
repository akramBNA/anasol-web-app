import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-main-component',
  imports: [CommonModule, Navbar],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {}
