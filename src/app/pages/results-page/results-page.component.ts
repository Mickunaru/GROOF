import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-results-page',
    standalone: true,
    templateUrl: './results-page.component.html',
    styleUrl: './results-page.component.scss',
    imports: [FormComponent, RouterLink]
})
export class ResultsPageComponent {

}
