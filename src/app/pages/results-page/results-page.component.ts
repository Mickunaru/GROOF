import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { RouterLink } from '@angular/router';
import { DynamicGridReadOnlyComponent } from '../../components/dynamic-grid-read-only/dynamic-grid-read-only.component';

@Component({
    selector: 'app-results-page',
    standalone: true,
    templateUrl: './results-page.component.html',
    styleUrl: './results-page.component.scss',
    imports: [FormComponent, RouterLink, DynamicGridReadOnlyComponent]
})
export class ResultsPageComponent {

}
