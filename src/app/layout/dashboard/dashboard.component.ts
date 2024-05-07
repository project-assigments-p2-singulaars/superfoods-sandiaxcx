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
  }

  getTotalCalories(): number {
    return this.dashboardService.getTotalCalories();
  }


}