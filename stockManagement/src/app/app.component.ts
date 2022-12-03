import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /** Constructor */
  constructor(private router : Router, private route : ActivatedRoute) {}

  /**
   * @author : Dhivya Vijayaragavan
   * @created_date : 2022-04-21 21:18:32
   * @description : Function to nativate from menus
   */
  public goToMenuItems(menu : string):void {
    this.router.navigate([{},menu],{relativeTo: this.route})
  }

  /**
   * @author : Dhivya Vijayaragavan
   * @created_date : 2022-04-21 21:18:32
   * @description : Function to nativate from menus
   */
  public logOut() : void {
    localStorage.removeItem('UID');
    this.router.navigate(['/login'],{})
  }
}
