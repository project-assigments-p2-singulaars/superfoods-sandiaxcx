import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Foods } from '../../shared/interfaces/foods';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

 // REACTIVE FORM /////////////////////////
  // form!: FormGroup;
  // submitted = false;
  
  
  // constructor(private fb:FormBuilder){
  //   this.form = fb.group({
  //     image: [
  //       '',
  //       Validators.required
  //     ],
  //     name: [
  //       '',
  //       [Validators.required,
  //         Validators.minLength(2)]
  //     ],
  //     calories: [
  //       '',
  //       Validators.required
  //     ]
  //   })
  // }
  
  // get registerFormControl(){
  //   return this.form.controls
  // }
  
  // onSubmit(){
  //   if (this.form.valid && !this.submitted){
  //     // alert(JSON.stringify(this.registerForm.value))
  //     this.submitted = true;
  //   } else {
  //     alert("Your product has been saved")
  //   }
  // }
  
  // resetForm(){
  //   this.form.reset()
  //   this.submitted = false;
  // }

  //////FORM IN CLASS ///////////

  @Output() formSent=new EventEmitter();

  submit(foodForm:NgForm){
    const foodItem:Foods={
      id: 999,
      name: foodForm.controls['name'].value,
      calories: foodForm.controls['calories'].value,
      image: foodForm.controls['image'].value,
      quantity: foodForm.controls['quantity'].value
    }

    this.formSent.emit(foodItem)
    foodForm.resetForm()
    console.log(this.formSent)
  }
    
}
