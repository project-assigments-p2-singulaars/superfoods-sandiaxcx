import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  private dashboard: any[] = [];
  
  // WORKING - OLD
  // addItem(foods:any){
  //   this.dashboard.push(foods);
  // }

  addItem(food: any) {
  const existingFood = this.dashboard.findIndex(item => item.name === food.name);
  if (existingFood !== -1) {
    this.dashboard[existingFood].quantity++;
  } else {
    this.dashboard.push({ ...food, quantity: 1 });
  }
}

  getItems(){
    return this.dashboard;
  }
    
  getTotalCalories(): number {
    return this.dashboard.reduce((total, item) => total + (item.calories * item.quantity), 0);
  }

    // WORKING - OLD
    // getTotalCalories(): number {
    //   return this.dashboard.reduce((total, product) => total + product.calories, 0);
    // }
}