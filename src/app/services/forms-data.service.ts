import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsDataService {
  height: BehaviorSubject<number> = new BehaviorSubject(0);
  width: BehaviorSubject<number> = new BehaviorSubject(0);
  xValue: BehaviorSubject<number> = new BehaviorSubject(0);
  yValue: BehaviorSubject<number> = new BehaviorSubject(0);
  
  // constructor() { }

  setValues(h: number, w: number, x: number, y: number) {
    this.height.next(h);
    this.width.next(w);
    this.xValue.next(x);
    this.yValue.next(y);
  }
}
