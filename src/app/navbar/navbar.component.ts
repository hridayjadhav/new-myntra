import { Component } from '@angular/core';
import { faCircleUser, faHeart, faShoppingBag, faMagnifyingGlass, faBars,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userIcon = faCircleUser;
  heartIcon = faHeart;
  bagIcon = faShoppingBag;
  searchIcon = faMagnifyingGlass;
  menuIcon = faBars;
  logoutIcon = faArrowRightFromBracket;

  constructor( private router: Router, private cookie : CookieService ){}

  logout(){
    // this.cookie.deleteAll();
    this.router.navigate(['/login']);
  }

}
