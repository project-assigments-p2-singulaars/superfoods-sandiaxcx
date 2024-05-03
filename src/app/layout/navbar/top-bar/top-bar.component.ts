import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormComponent } from "../../form/form.component";

@Component({
    selector: 'app-top-bar',
    standalone: true,
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss',
    imports: [FormComponent]
})
export class TopBarComponent{

  display: boolean = false;

  onPress() {
    this.display = !this.display;}
}
