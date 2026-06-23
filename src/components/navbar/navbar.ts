import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface NavItem {
  label: string;
  target: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  mobileMenuOpen = false;

  navItems: NavItem[] = [
    { label: 'Qui sommes-nous', target: 'about' },
    { label: 'Activités', target: 'activities' },
    { label: 'Projets', target: 'projects' },
    { label: 'Témoignages', target: 'testimonials' },
    { label: 'Contactez-nous', target: 'contact' },
  ];

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu(): void {
    this.mobileMenuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    this.closeMenu();

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
