import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GridDataService } from '../../services/grid-data.service';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  form: FormGroup;
  public resultSmall:number=0;
  public resultMedium:number=0;
  public resultLarge:number=0;
  constructor(private fb: FormBuilder, private gridDataService: GridDataService) {
    this.form = this.fb.group({
      inputOne: [0],
      inputTwo: [0],
      inputThree:[0]
    });
  }

  onSubmit() {
    const nGreenTile= this.gridDataService.getNumberOfGreenTiles();
    this.resultSmall = ((nGreenTile*(this.form.value.inputOne/100))/(0.5))*(5);
    this.resultMedium = ((nGreenTile*(this.form.value.inputTwo/100))/(0.5))*(200);
    this.resultLarge = ((nGreenTile*(this.form.value.inputThree/100)/(0.5)))*(1000);
    
    console.log("hello",nGreenTile);
  }
}
