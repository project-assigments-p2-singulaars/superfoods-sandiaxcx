import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  form!: FormGroup;
  submitted = false;
  
  
  constructor(private fb:FormBuilder){
    this.form = fb.group({
      image: [
        '',
        Validators.required
      ],
      name: [
        '',
        [Validators.required,
          Validators.minLength(2)]
      ],
      calories: [
        '',
        Validators.required
      ]
    })
  }
  
  get registerFormControl(){
    return this.form.controls
  }
  
  onSubmit(){
    if (this.form.valid && !this.submitted){
      // alert(JSON.stringify(this.registerForm.value))
      this.submitted = true;
    } else {
      alert("Your product has been saved")
    }
  }
  
  resetForm(){
    this.form.reset()
    this.submitted = false;
  }
}
