import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoofDataModel } from '../../models/roof-data.model';
import { FormsDataService } from '../../services/forms-data.service';
import { GridDataService } from '../../services/grid-data.service';
import { Subscription } from 'rxjs';
import { TileModel } from '../../models/tile.model';

@Component({
  selector: 'app-dynamic-grid-read-only',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-grid-read-only.component.html',
  styleUrl: './dynamic-grid-read-only.component.scss'
})
export class DynamicGridReadOnlyComponent implements OnInit, OnDestroy {
  height: number = 0;
  width: number = 0;
  sideMax: number = 0;
  tiles: TileModel[] = [];
  formsDataSubscription: Subscription = new Subscription();
  gridDataSubscription: Subscription = new Subscription();
  constructor(private formsDataService: FormsDataService, private gridDataService: GridDataService) { }

  ngOnInit() {
    this.formsDataSubscription = this.formsDataService.dataChanged.subscribe((data: RoofDataModel) => {
      this.height = data.height;
      this.width = data.width;
      this.sideMax = Math.max(this.height, this.width);
    });
    this.gridDataSubscription = this.gridDataService.tilesChanged.subscribe((tiles: TileModel[]) => {
      this.tiles = tiles;
    });

  }

  ngOnDestroy() {
    this.gridDataSubscription.unsubscribe();
    this.formsDataSubscription.unsubscribe();
  }
}
