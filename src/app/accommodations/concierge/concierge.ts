import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomInfo } from '../room-info';

@Component({
  imports: [FormsModule],
  selector: 'app-concierge',
  styleUrl: './concierge.css',
  templateUrl: './concierge.html',
})
export class Concierge {
  @Input() rooms: RoomInfo[] = [];

  request = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomChoice: '',
    butler: false,
    room: false,
    vip: false,
    wishes: '',
  };

  sent = signal(false);

  send() {
    console.log(this.request);
    this.sent.set(true);
  }
}
