import { Component, Input, inject } from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';
import { FoodListComponent } from '../foods/food-list/food-list.component';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FoodListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // dashboardService = inject(DashboardService)
}
