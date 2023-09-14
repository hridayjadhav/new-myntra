import { Component, HostListener, OnInit } from '@angular/core';
import { userDataConst } from './constants/userData.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    localStorage.setItem('userData', JSON.stringify(userDataConst));
    
  }
  title = 'myntra-app';


  // @HostListener('window:beforeunload',['$event']) onBeforeUnload($event: any) {this._onBeforeUnload($event);}

  // public _onBeforeUnload(event: any){
  //   const confirmationMessage = 'You have unsaved changes. Do you really want to leave?';
  //   event.returnValue = confirmationMessage;
  // }
}
