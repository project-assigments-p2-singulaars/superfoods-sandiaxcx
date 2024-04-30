import { Component } from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  filterArray!: Foods [];
}
