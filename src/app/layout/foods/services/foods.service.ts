import { Injectable } from '@angular/core';
import foods from '../../../data/foods';
import { Foods } from '../../../shared/interfaces/foods';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  foods: Foods[] = [];


  getAllProducts(){
    return foods
  }

  addProduct(foods:Foods){
    this.foods.push(foods)
  }
  constructor() { }
}
