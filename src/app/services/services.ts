
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface GastroPhoto {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

gastroPhotos = [
  { src: 'food1.jpg', alt: 'Gourmet dish' },
  { src: 'food2.jpg', alt: 'Burger' },
  { src: 'food3.jpg', alt: 'Caviar starter' },
  { src: 'food4.jpg', alt: 'Dessert' },
  { src: 'restaurant.jpg', alt: 'Restaurant' },
  { src: 'cocktail1.jpg', alt: 'Cocktail' },
  { src: 'cocktail2.jpg', alt: 'Cocktail' } 
];
}
