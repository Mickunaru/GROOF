import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TileModel } from '../models/tile.model';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  width: number = 0;
  height: number = 0;
  tilesChanged = new BehaviorSubject<TileModel[]>([]);

  getNumberOfGreenTiles(): number {
    return this.tilesChanged.value.reduce((count, tile) => {
      if (tile.type === 'plant') {
        count++;
      }
      return count;
    }, 0);
  }

  constructor() { }
}
