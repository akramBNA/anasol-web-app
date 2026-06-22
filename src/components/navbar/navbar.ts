import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolled = false;

  constructor(private router: Router) {}

  navLinks = [
    { label: 'Qui sommes nous', fragment: 'about' },
    { label: 'Activités', fragment: 'activities' },
    { label: 'Projets', fragment: 'projects' },
    { label: 'Contactez nous', fragment: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  scrollToSection(fragment: string): void {
    const element = document.getElementById(fragment);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
