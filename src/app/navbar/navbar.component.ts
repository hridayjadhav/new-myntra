import { Component, OnInit } from '@angular/core';
import { faCircleUser, faHeart, faShoppingBag, faMagnifyingGlass, faBars,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { nav_img_url } from '../constants/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  userIcon = faCircleUser;
  heartIcon = faHeart;
  bagIcon = faShoppingBag;
  searchIcon = faMagnifyingGlass;
  menuIcon = faBars;
  logoutIcon = faArrowRightFromBracket;

  //imgs
  logoImage = nav_img_url;
  userData: any; // Create a variable to store user data
  isLoggedIn: any;



  constructor( private router: Router, private cookie : CookieService){}
  ngOnInit(): void {
    // Retrieve user data from localStorage
    const userDataJson = localStorage.getItem('currentUser');
    if (userDataJson) {
      this.userData = JSON.parse(userDataJson);
    }
  }

  logout(){
    // this.cookie.deleteAll();
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
    this.cookie.delete('isVerified');
    this.router.navigate(['/login']);
  }

}
