import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TileTypeService {
  selectedType: BehaviorSubject<string> = new BehaviorSubject('available');

  constructor() { }
}
