import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { Foods } from '../../shared/interfaces/foods';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() formSent=new EventEmitter();
  formVisible: boolean = true;

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
    this.formVisible = false;
  }
}
