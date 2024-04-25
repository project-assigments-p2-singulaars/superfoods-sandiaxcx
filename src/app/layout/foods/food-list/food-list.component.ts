import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../services/foods.service';
import { Foods } from '../../../shared/interfaces/foods';


@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit{

  foods!: Foods[];
  constructor(private foodsService:FoodsService){}

  ngOnInit(): void {
    this.foods = this.foodsService.getAllProducts()
  }

}
