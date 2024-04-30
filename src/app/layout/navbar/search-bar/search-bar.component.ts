import { Component, OnInit } from '@angular/core';
import foods from "../../../data/foods"
import { Foods } from '../../../shared/interfaces/foods';
import { FormsModule } from '@angular/forms';
import { FoodsService } from '../../foods/services/foods.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit{
  [x: string]: any;
  valuePlaceholder = "Find your food";
  inputValue!: string;
  filterArray!:Foods[];
  foodProducts:Foods[] = [];

  constructor(private foodsService:FoodsService){}

  ngOnInit(): void {

    this.foodProducts = foods;
    this.foodProducts = this.foodsService.getAllProducts()
  }
  searchFood () {
    console.log(this.inputValue)
    this.filterArray = this.foodProducts.filter((food:Foods) => 
      food.name.toLowerCase().includes(this.inputValue.toLowerCase())
      
    )
  }

}
