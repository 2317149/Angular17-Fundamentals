import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <input type="text" id="title" [(ngModel)]="title"/>

        <label for="body">Post Body</label>
        <textarea id="body" [(ngModel)]="body"></textarea>
      </section>
      <section>
        <h2>Preview</h2>
        <h3>{{ title }}</h3>
        <p>{{ body }}</p>
      </section>
      <!-- <section>
        <p>Display title</p>
        <p>Display value</p>
      </section> -->
    </article>
  `,
})
export class AppComponent {
  title!: string;
  body!: string;
}
