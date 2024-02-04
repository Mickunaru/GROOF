import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TileModel } from '../../models/tile.model';
import { FormsDataService } from '../../services/forms-data.service';
import { RoofDataModel } from '../../models/roof-data.model';
import { Subscription } from 'rxjs';
import { TileTypeService } from '../../services/tile-type.service';
import { GridDataService } from '../../services/grid-data.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-grid',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dynamic-grid.component.html',
  styleUrl: './dynamic-grid.component.scss'
})
export class DynamicGridComponent implements OnInit, OnDestroy {
  height: number = 0;
  width: number = 0;
  sideMax: number = 0;
  selectedType: string = 'white';
  tiles: TileModel[] = [];
  formsDataSubscription: Subscription = new Subscription();
  tileTypeSubscription: Subscription = new Subscription();
  constructor(private formsDataService: FormsDataService, private tileTypeService: TileTypeService, private gridDataService: GridDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.tileTypeSubscription = this.tileTypeService.selectedType.subscribe((type: string) => {
      this.selectedType = type;
    });
    this.formsDataSubscription = this.formsDataService.dataChanged.subscribe((data: RoofDataModel) => {
      this.height = data.height;
      this.width = data.width;
      this.sideMax = Math.max(this.height, this.width);
      this.tiles = [];
      for (let i = 0; i < data.height * data.width; i++) {
        if (i === data.width * data.height - data.width * data.yValue + data.xValue) {
          this.tiles.push(new TileModel('entry', 'red'));
        } else {
          this.tiles.push(new TileModel('available', 'white'));
        }
      }
    });
  }

  ngOnDestroy() {
    this.tileTypeSubscription.unsubscribe();
    this.formsDataSubscription.unsubscribe();
  }

  changeColor(index: number, $event: MouseEvent) {
    if (this.tiles[index].type === 'entry') return;
    if ($event.buttons === 1) {
      let color = '';
      switch (this.selectedType) {
        case 'path':
          color = 'brown'
          break;
        case 'unavailable':
          color = 'lightgrey'
          break;
        case 'available':
          color = 'white'
          break;
        case 'plant':
          color = 'green'
          break;
      }
      this.tiles[index].color = color;
    }
  }

  onSubmit() {
    if (this.height !== 0 && this.width !== 0) {
      this.gridDataService.tilesChanged.next(this.tiles);
      this.gridDataService.height = this.height;
      this.gridDataService.width = this.width;
      console.log(this.gridDataService.getNumberOfGreenTiles());
      this.router.navigate(['../results'], { relativeTo: this.route })
    }
  }
}
