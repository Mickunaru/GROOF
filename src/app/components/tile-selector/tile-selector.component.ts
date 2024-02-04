import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TileTypeService } from '../../services/tile-type.service';

@Component({
  selector: 'app-tile-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tile-selector.component.html',
  styleUrl: './tile-selector.component.scss'
})
export class TileSelectorComponent {
  colorTypePair = [
    ['path', 'brown'],
    ['plant', 'green'],
    ['unavailable', 'grey'],
    ['available', 'white',]
  ]

  constructor(private tileTypeService: TileTypeService) {}

  setType(type: string) {
    this.tileTypeService.selectedType.next(type);
  }
}
