import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormComponent } from "../../form/form.component";
import { Foods } from '../../../shared/interfaces/foods';
import { FoodsService } from '../../foods/services/foods.service';

@Component({
    selector: 'app-top-bar',
    standalone: true,
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss',
    imports: [FormComponent]
})
export class TopBarComponent{
  foodProducts: Foods[] = [];
  food = this.foodProducts;

  constructor(private foodsService: FoodsService) {}

  ngOnInit(): void {
    // Initialize foodProducts array using the service method
    this.foodProducts = this.foodsService.getAllProducts();
  }
  
  display: boolean = false;

  onPress() {
    this.display = !this.display;}

    registerProduct(food: Foods) {
      // Add the emitted food object to the foodProducts array
      this.foodProducts.push(food);
      // Update the data in the service as well if needed
      this.foodsService.addProduct(food);
      console.log(food);
    }
}
