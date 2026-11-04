import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  // Coordenadas fijas ubicación en Tortolì 
  readonly latitude = 39.9188;
  readonly longitude = 9.6938;

  // Enlace directo a Google Maps para el botón "GET DIRECTIONS"
  get directionsUrl(): string {
    return `https://www.google.com/maps/dir/?api=1&destination=${this.latitude},${this.longitude}`;
  }
}
