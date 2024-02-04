import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent,FormsModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PolyHx2024';
}
