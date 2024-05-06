import { Injectable, signal } from '@angular/core';
import { DashFoods, Dashboard } from '../dash-foods';
import foods from '../../../data/foods';
import { Foods } from '../../../shared/interfaces/foods';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private dashboard: any[] = [];
  
  addItem(foods:any){
    this.dashboard.push(foods);
  }

  getItems(){
    return this.dashboard;
  }

  // addItem(item: any): void {
  //   this.it

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

  // removeItem(id: number) {
  //   this.dash.update((currentDash) => {
  //     const item = currentDash.items.find((i) => i.id === id);

  //     if (item) {
  //       currentDash.totalAmount -= item.calories * item.quantity;
  //       currentDash.items = currentDash.items.filter(
  //         (i) => i.id !== id
  //       );
  //     }

  //     return currentDash;
  //   });
  // }  

}
