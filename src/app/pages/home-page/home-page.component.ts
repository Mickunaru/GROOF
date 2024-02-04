import { Component, AfterViewInit } from '@angular/core';
import { FormsDataService } from '../../services/forms-data.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements AfterViewInit {
  private height: number = 0;
  private width: number = 0;
  private x: number = 0;
  private y: number = 0;

  constructor(private fds: FormsDataService) {}

  ngAfterViewInit(): void {
    this.drawDimensions();
  }

  getInputValues(): void {
    this.height = parseInt((<HTMLInputElement>document.getElementById("height")).value);
    this.width = parseInt((<HTMLInputElement>document.getElementById("width")).value);
    this.x = parseInt((<HTMLInputElement>document.getElementById("x")).value);
    this.y = parseInt((<HTMLInputElement>document.getElementById("y")).value);

    this.fds.setValues(this.height, this.width, this.x, this.y);

    if (!isNaN(this.height) && !isNaN(this.width) && !isNaN(this.x) && !isNaN(this.y)) {
      this.drawDimensions();
    } else {
      console.error("Invalid input. Please enter valid numeric values for height, width, x, and y.");
    }
  }

  private drawDimensions(): void {
    const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
    if (!canvas) {
      console.error("Canvas element not found!");
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Unable to get 2D rendering context!");
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings

    ctx.fillStyle = 'gray'; // Set rectangle color
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.fillStyle = 'red'; // Set circle color
    ctx.beginPath();
    ctx.arc(this.x, this.y, 6, 0, 2 * Math.PI);
    ctx.fill();
  }

}
