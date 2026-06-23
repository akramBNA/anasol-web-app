import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.html',
  styleUrls: ['./scroll-to-top.css'],
})
export class ScrollToTop {
  visible = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.visible = window.scrollY > 400;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
