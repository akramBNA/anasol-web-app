import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { WhoAreWe } from '../who-are-we/who-are-we';
import { Activities } from '../activities/activities';
import { Projects } from '../projects/projects';
import { Testimonials } from '../testimonials/testimonials';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main-component',
  imports: [CommonModule, Navbar, WhoAreWe, Activities, Projects, Testimonials, Contact, Footer],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {}
