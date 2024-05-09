import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { TopBarComponent } from "./layout/navbar/top-bar/top-bar.component";
import { FormComponent } from "./layout/form/form.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FoodListComponent } from "./layout/foods/food-list/food-list.component";
import { DashboardComponent } from "./layout/dashboard/dashboard.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LayoutComponent, TopBarComponent, FormComponent, HeaderComponent, FoodListComponent, DashboardComponent]
})
export class AppComponent {
  title = 'superfoods';
  toggleStepper = false;
}
