import { Component } from '@angular/core';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { TopBarComponent } from "./top-bar/top-bar.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [SearchBarComponent, TopBarComponent]
})
export class NavbarComponent {

}
