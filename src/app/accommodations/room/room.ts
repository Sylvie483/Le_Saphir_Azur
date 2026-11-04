import { Component, Input } from '@angular/core';
import { RoomInfo } from '../room-info'; 

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.html',
  styleUrl: './room.css'
})
export class Room {
  @Input() room!: RoomInfo;
}
