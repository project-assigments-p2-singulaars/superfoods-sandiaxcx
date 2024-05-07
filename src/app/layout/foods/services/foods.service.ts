import { Injectable, signal } from '@angular/core';
import foods from '../../../data/foods';
import { Foods } from '../../../shared/interfaces/foods';
import { DashFoods, Dashboard } from '../../dashboard/dash-foods';

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

}
