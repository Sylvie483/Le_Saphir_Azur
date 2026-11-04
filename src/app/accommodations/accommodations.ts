import { Component } from '@angular/core';
import { Room } from './room/room'; 
import { RoomInfo } from './room-info'; 
import { Concierge } from './concierge/concierge';

@Component({
  selector: 'app-accommodations',
  standalone: true,
  imports: [Room, Concierge],
  templateUrl: './accommodations.html',
  styleUrl: './accommodations.css'
})
export class Accommodations {
  rooms: RoomInfo[] = [
    // --- SUITES---
    {
      picture: 'suite1.jpg',
      bathroomPicture: 'suite1Bath.jpg',
      category: 'Suite',
      name: 'Cannes',
      priceNight: 7500,
      description: 'An expansive private sanctuary featuring panoramic sea views, a private wraparound terrace, an elegant living room, and dedicated butler service.'
    },
    {
      picture: 'suite2.jpg',
      bathroomPicture: 'suite2Bath.jpg',
      category: 'Suite',
      name: 'Sensation',
      priceNight: 7500,
      description: 'Designed for absolute privacy, this exquisite retreat features serene garden views, a private wraparound terrace, an elegant living room, and dedicated butler service.'
    },
    {
      picture: 'suite3.jpg',
      bathroomPicture: 'suite3Bath.png',
      category: 'Suite',
      name: 'Mille et Une Nuits',
      priceNight: 8000,
      description: 'Inspired by the magic of the Arabian Nights, this extraordinary suite features soaring ceilings, intricate Arabic motifs, a private balcony overlooking the sea, a king-size canopy bed, an elegant living room, and a magnificent Italian marble bathroom with a sauna, jacuzzi, and aromatic shower.'
    },
    {
      picture: 'suite4.jpg',
      bathroomPicture: 'suite4Bath.jpg',
      category: 'Suite',
      name: 'Prestige',
      priceNight: 8000,
      description: 'The pinnacle of understated luxury. Featuring a private dining room, expansive living quarters, and an exclusive collection of bespoke VIP amenities.'
    },

    // --- PREMIUM ---
    {
      picture: 'premium1.jpg',
      bathroomPicture: 'premium1Bath.jpg',
      category: 'Premium',
      name: 'Romantique',
      priceNight: 10000,
      description: 'An exquisite living space opening onto a lush tropical garden terrace, just steps from the shore. Complete with a private spa-inspired bathroom and a carefully curated art collection.'
    },
    {
      picture: 'premium2.jpg',
      bathroomPicture: 'premium2Bath.jpg',
      category: 'Premium',
      name: 'Élegance',
      priceNight: 10000,
      description: 'Enjoy breathtaking sunset views from a private sea-facing terrace. This exceptional residence features contemporary interiors, a separate living and dining room, a private home cinema, ambient lighting, and a luxurious spa bathroom with a sauna, jacuzzi, and aromatic shower.'
    },
    {
      picture: 'premium3.jpg',
      bathroomPicture: 'premium3Bath.jpg',
      category: 'Premium',
      name: 'Diamant',
      priceNight: 10000,
      description: 'A harmonious blend of contemporary elegance and absolute tranquility. Enjoy privileged sea and mountain views from a private duplex terrace and garden. Features include a luxurious spa bathroom with a sauna, jacuzzi, shower, and hydromassage bathtub, a private living and dining area, a cinema and relaxation lounge, and a sofa bed for additional guests.'
    },
    {
      picture: 'premium4.jpg',
      bathroomPicture: 'premium4Bath.jpg',
      category: 'Premium',
      name: 'Majesté',
      priceNight: 10000,
      description: 'An exceptional duplex suite adorned with elegant Art Deco touches. Enjoy a private cinema room with reclining seats, privileged sea and mountain views, and an exclusive chill-out terrace. Features also include a luxurious spa bathroom with a sauna, jacuzzi, shower, and hydromassage bathtub, a private living and dining room, and a sofa bed for additional guests.'
    },

    // --- SUPERIOR (2) ---
    {
      picture: 'superiorBed.jpg',
      bathroomPicture: 'superiorBath.jpg',
      category: 'Superior',
      name: 'Étoile',
      priceNight: 2000,
      description: 'A refined retreat featuring exquisite handcrafted organic cotton linens, luxurious artisanal bath amenities, and peaceful courtyard views.'
    },
    {
      picture: 'superiorKing.jpg',
      bathroomPicture: 'superiorBath.jpg',
      category: 'Superior',
      name: 'Art',
      priceNight: 2500,
      description: 'Refined comfort featuring handcrafted organic cotton linens, artisanal bath products, and a tranquil courtyard view.'
    },
    {
      picture: 'superiorView.jpg',
      bathroomPicture: 'superiorViewBath.jpg',
      category: 'Superior',
      name: 'Merveille',
      priceNight: 3000,
      description: 'A serene and sophisticated retreat offering breathtaking sea views, elegant contemporary interiors, and exceptional comfort in every detail.'
    },

    // --- STANDARD ---
    {
      picture: 'standardBed.jpg',
      bathroomPicture: 'standardBath.jpg',
      category: 'Standard',
      name: 'Azur',
      priceNight: 2000,
      description: 'An intimate, beautifully appointed room providing essential quiet luxury, comfort, double bed.'
    },
    {
      picture: 'standardKing.jpg',
      bathroomPicture: 'standardKingBath.jpg',
      category: 'Standard',
      name: 'Velours',
      priceNight: 2500,
      description: 'A sophisticated sanctuary featuring elegant blue tones, refined interiors, premium bedding, and an atmosphere designed for the ultimate restorative escape.'
    }
  ];
}