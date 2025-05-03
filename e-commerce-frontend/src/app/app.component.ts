import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet,CommonModule, CurrencyPipe],
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce-frontend';
  featuredProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Premium sound quality with noise cancellation',
      price: 99.99,
      image: 'https://via.placeholder.com/300x200?text=Headphones'
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Track your fitness and stay connected',
      price: 199.99,
      image: 'https://via.placeholder.com/300x200?text=Smart+Watch'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with 20h battery life',
      price: 79.99,
      image: 'https://via.placeholder.com/300x200?text=Speaker'
    }
  ];

  categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://via.placeholder.com/300x200?text=Electronics'
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://via.placeholder.com/300x200?text=Fashion'
    },
    {
      id: 3,
      name: 'Home & Garden',
      image: 'https://via.placeholder.com/300x200?text=Home+Garden'
    },
    {
      id: 4,
      name: 'Sports',
      image: 'https://via.placeholder.com/300x200?text=Sports'
    }
  ];

  testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Regular Customer',
      comment: 'Great products and fast delivery. Will shop here again!',
      avatar: 'https://via.placeholder.com/150?text=JS'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'First-time Buyer',
      comment: 'Excellent customer service and quality products. Highly recommended!',
      avatar: 'https://via.placeholder.com/150?text=SJ'
    },
    {
      id: 3,
      name: 'Michael Brown',
      position: 'Loyal Customer',
      comment: 'Always find what I need at reasonable prices. 5 stars!',
      avatar: 'https://via.placeholder.com/150?text=MB'
    }
  ];
}