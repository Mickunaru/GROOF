import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


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
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      inputOne: [0],
      inputTwo: [0],
      inputThree:[0]
    });
  }

  onSubmit() {
    this.resultSmall = ((100*(this.form.value.inputOne/100))/(0.5))*(5);
    this.resultMedium = ((100*(this.form.value.inputTwo/100))/(0.5))*(200);
    this.resultLarge = ((100*(this.form.value.inputThree/100)/(0.5)))*(1000);
  }
}
