import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TileModel } from '../../models/tile.model';
import { FormsDataService } from '../../services/forms-data.service';
import { RoofDataModel } from '../../models/roof-data.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-grid.component.html',
  styleUrl: './dynamic-grid.component.scss'
})
export class DynamicGridComponent implements OnInit, OnDestroy {
  grid: TileModel[][] = [[]];
  subscription: Subscription = new Subscription();
  constructor(private formsDataService: FormsDataService) { }

  ngOnInit() {
    this.subscription = this.formsDataService.dataChanged.subscribe((data: RoofDataModel) => {
      this.grid = [];
      for (let i = 0; i < data.height; i++) {
        this.grid[i] = [];
        for (let j = 0; j < data.width; j++) {
          this.grid[i][j] = new TileModel('available', 'white');
        }
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
