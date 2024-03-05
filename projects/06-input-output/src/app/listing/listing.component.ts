import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: ` <button (click)="handleCarSaved()">Save</button>`,
  styles: ``,
})
export class ListingComponent {
  @Input() car!: Car;
  @Output() carSaved = new EventEmitter<Car>();

  handleCarSaved() {
    this.carSaved.emit(this.car);
  }
}
