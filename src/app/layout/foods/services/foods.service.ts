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

  // dash = signal<Dashboard>({
  //   items: foods,
  //   totalAmount: this.calculateTotalAmount(foods),
  // });

  // private calculateTotalAmount(items: DashFoods[]): number {
  //   return items.reduce((total, item) => total + item.calories * item.quantity, 0);
  // }
  
  // addItem(item: DashFoods) {
  //   this.dash.update((currentDash) => {
  //     const existingItem = currentDash.items.find(
  //       (i) => i.id === item.id
  //     );

  //     if (existingItem) {
  //       // Increment quantity if item already exists
  //       existingItem.quantity += item.quantity;
  //     } else {
  //       // Add the new item if it doesn't exist
  //       currentDash.items.push(item);
  //     }

  //     currentDash.totalAmount += item.calories * item.quantity;

  //     return currentDash;
  //   });
  // }
  // constructor() { }
}
