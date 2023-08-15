import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isDarkMode: boolean = false;

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
