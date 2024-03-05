import { Component } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from './listing/listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListingComponent],
  template: `,
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      @for(carList of carsList; track carList) {
        <app-listing [car]="carList" (carSaved)="addCarToSaved($event)"/>
        <article class="listing">
          <div class="image-parent">
            <img class="product-image" src="https://placehold.co/100x100" />
          </div>
          <section class="details">
            <p class="title">{{ carList.model }} {{ carList.make }}</p>
            <hr />
            <p class="detail">
              <span>Year</span>
              <span>{{ carList.year }}</span>
            </p>
            <div class="detail">
              <span>Transmission</span>
              <span>{{ carList.transmission }}</span>
            </div>
            <p class="detail">
              <span>Mileage</span>
              <span>{{ carList.miles }}</span>
            </p>
            <p class="detail">
              <span>Price</span>
              <span>{{ carList.price }}</span>
            </p>
          </section>
        </article>
      }

      @for(savedCar of savedCarList; track savedCar) {
        <article class="listing">
          <div class="image-parent">
            <img class="product-image" src="https://placehold.co/100x100" />
          </div>
          <section class="details">
            <p class="title">{{ savedCar.model }} {{ savedCar.make }}</p>
            <hr />
            <p class="detail">
              <span>Year</span>
              <span>{{ savedCar.year }}</span>
            </p>
            <div class="detail">
              <span>Transmission</span>
              <span>{{ savedCar.transmission }}</span>
            </div>
            <p class="detail">
              <span>Mileage</span>
              <span>{{ savedCar.miles }}</span>
            </p>
            <p class="detail">
              <span>Price</span>
              <span>{{ savedCar.price }}</span>
            </p>
          </section>
        </article>
      } @empty {
        <p>No saved cars</p>
      }

      <!-- end car listing markup -->
    </section>
  `,
  styles: [],
})
export class AppComponent {
  savedCarList: Car[] = [];
  carsList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];

  addCarToSaved(car: Car) {
    this.savedCarList.push(car);
  }
}
