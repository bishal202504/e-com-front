import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-carousel-comp',
  imports: [],
  templateUrl: './carousel-comp.component.html',
  styleUrl: './carousel-comp.component.css',
  standalone: true,
  providers: [ProductService]
})
export class CarouselCompComponent {

}
