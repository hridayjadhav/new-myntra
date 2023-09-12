import { Component } from '@angular/core';
import { footImg1, footImg2, footImg3, footImg4, footImg5, footImg6, footImg7, footImg8 } from '../constants/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  footImg1 = footImg1;
  footImg2 = footImg2;
  footImg3 = footImg3;
  footImg4 = footImg4;
  footImg5 = footImg5;
  footImg6 = footImg6;
  footImg7 = footImg7;
  footImg8 = footImg8;

  constructor(){}

}
