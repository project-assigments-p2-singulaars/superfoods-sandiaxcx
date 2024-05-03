import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import { FoodListComponent } from "./foods/food-list/food-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TopBarComponent } from "./navbar/top-bar/top-bar.component";
import { FormComponent } from "./form/form.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [NavbarComponent, HeaderComponent, FoodListComponent, DashboardComponent, TopBarComponent, FormComponent]
})
export class LayoutComponent {
    display = false;
    onPress() {
      this.display = true;
        // toggleStepper = false;

}
}
