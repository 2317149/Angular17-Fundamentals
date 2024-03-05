import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>Angular is installed and running.</li>
      <li>The app is running in the browser.</li>
      <li>You are seeing this message.</li>
    </ol>
  `,
  styles: `
    ol {
      color: cyan;
      list-style-type: upper-roman;
    }
  `,
})
export class AppComponent {}
