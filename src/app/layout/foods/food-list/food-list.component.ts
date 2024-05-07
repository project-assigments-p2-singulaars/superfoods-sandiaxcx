import { Component, Input, OnInit, inject } from '@angular/core';
import { FoodsService } from '../services/foods.service';
import { Foods } from '../../../shared/interfaces/foods';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../../dashboard/services/dashboard.service';
import { FormComponent } from "../../form/form.component";
import { MatDialogModule } from '@angular/material/dialog'



@Component({
    selector: 'app-food-list',
    standalone: true,
    templateUrl: './food-list.component.html',
    styleUrl: './food-list.component.scss',
    imports: [FormsModule, FormComponent]
})
export class FoodListComponent implements OnInit{

  @Input() foods!: Foods[];

    valuePlaceholder = "Find your food";
    inputValue!: string;
    filterArray: Foods[] = [];
    foodProducts: Foods[] = [];
    food = this.foodProducts;
  
    constructor(private foodsService: FoodsService) {}
  
    ngOnInit(): void {
      this.foodProducts = this.foodsService.getAllProducts();
    }
  
    searchFood() {
      console.log(this.inputValue)
      this.filterArray = this.foodProducts.filter((food: Foods) => 
        food.name.toLowerCase().includes(this.inputValue.toLowerCase())
      );
    }
  
    registerProduct(food: Foods) {
      this.foodProducts.push(food);
      this.foodsService.addProduct(food);
      console.log(food);
    }

    dashboardService = inject(DashboardService)
    addToDash(food: any){
    this.dashboardService.addItem(food)
    }

  }