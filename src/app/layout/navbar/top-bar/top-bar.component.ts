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
    this.foodProducts = this.foodsService.getAllProducts();
  }
  
  display: boolean = false;

  onPress() {
    this.display = !this.display;}

  registerProduct(food: Foods) {
    this.foodProducts.push(food);
    this.foodsService.addProduct(food);
    console.log(food);
  }
}
