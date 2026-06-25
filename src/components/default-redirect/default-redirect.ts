import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-default-redirect',
  imports: [CommonModule, RouterLink],
  templateUrl: './default-redirect.html',
  styleUrl: './default-redirect.css',
})
export class DefaultRedirect {}
