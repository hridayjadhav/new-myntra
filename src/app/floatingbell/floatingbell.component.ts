import { Component } from '@angular/core';
import {
  faBell
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-floatingbell',
  templateUrl: './floatingbell.component.html',
  styleUrls: ['./floatingbell.component.scss']
})
export class FloatingbellComponent {
  bellIcon = faBell;
}
