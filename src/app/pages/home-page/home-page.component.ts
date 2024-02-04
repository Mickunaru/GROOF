import { Component } from '@angular/core';
import { RoofFormComponent } from '../../components/roof-form/roof-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RoofFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
}
