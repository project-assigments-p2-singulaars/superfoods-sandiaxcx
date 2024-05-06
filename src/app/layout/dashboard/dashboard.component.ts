import { Component, Input, inject } from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';
import { FoodListComponent } from '../foods/food-list/food-list.component';
import { DashboardService } from './services/dashboard.service';
import { NgModel } from '@angular/forms';
import foods from '../../data/foods';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FoodListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dashboard: any[] = [];

  constructor(public dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboard = this.dashboardService.getItems();
    // if {
    //   quantity === 0;
    //   return quantity ++1
    // }
  }
}

  // dashboardService = inject(DashboardService)  
//   dashItems = this.dashboardService.dash().items;
//   totalAmount = this.dashboardService.dash().totalAmount;
// item: any;

  // constructor(private dashboardService: DashboardService) {}

  // addItem() {
  //   // fixed added product
  //   const newItem: any = {
  //     id: 999,
  //     name: 'tacos',
  //     calories: 154,
  //     quantity: 1,
  //   };

  //   this.dashboardService.addItem(newItem);
  //   this.udpateCart();
  // }

  // removeItem(id: number) {
  //   this.dashboardService.removeItem(id);
  //   this.udpateCart();
  // }

  // udpateCart() {
  //   // Update cartItems and totalAmount after removing an item
  //   this.dashItems = this.dashboardService.dash().items;
  //   this.totalAmount = this.dashboardService.dash().totalAmount;
  // }
