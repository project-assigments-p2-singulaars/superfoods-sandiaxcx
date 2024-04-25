import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import { FoodListComponent } from "./foods/food-list/food-list.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [NavbarComponent, HeaderComponent, FoodListComponent]
})
export class LayoutComponent {

}
