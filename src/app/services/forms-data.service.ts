import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RoofDataModel } from '../models/roof-data.model';

@Injectable({
  providedIn: 'root'
})
export class FormsDataService {
  dataChanged: BehaviorSubject<RoofDataModel> = new BehaviorSubject(new RoofDataModel(0, 0, 0, 0));

  setValues(h: number, w: number, x: number, y: number) {
    this.dataChanged.next(new RoofDataModel(h, w, x, y));
  }
}
