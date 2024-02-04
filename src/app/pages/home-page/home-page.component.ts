import { Component } from '@angular/core';
import { RoofFormComponent } from '../../components/roof-form/roof-form.component';
import { DynamicGridComponent } from '../../components/dynamic-grid/dynamic-grid.component';
import { TileSelectorComponent } from '../../components/tile-selector/tile-selector.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DynamicGridComponent, RoofFormComponent, TileSelectorComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
}
