import { Component, OnInit, inject } from '@angular/core';
import { FoodsService } from '../services/foods.service';
import { Foods } from '../../../shared/interfaces/foods';
import foods from '../../../data/foods';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../../dashboard/services/dashboard.service';


@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit{
  
  // para imprimir productos
  // foods!: Foods[];
  // constructor(private foodsService:FoodsService){}

  // ngOnInit(): void {
  //   this.foods = this.foodsService.getAllProducts()
  // }

  valuePlaceholder = "Find your food";
  inputValue!: string;
  filterArray:Foods[] = [];
  foodProducts:Foods[] = [];
  food = this.foodProducts;

  constructor(private foodsService:FoodsService){}

  ngOnInit(): void {

    // this.foodProducts = foods;
    this.foodProducts = this.foodsService.getAllProducts()
  }
  searchFood () {
    console.log(this.inputValue)
    this.filterArray = this.foodProducts.filter((food:Foods) => 
      food.name.toLowerCase().includes(this.inputValue.toLowerCase())
      
    )
  }

  // dashboardService = inject(DashboardService)
  // addToDash(food: any){
  //   this.dashboardService.addToDash(food)
  // }


}
