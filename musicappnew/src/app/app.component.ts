import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-app';


  // this is for next page top redirect
  onActivate(event) {
    window.scroll(0, 0);
  }

}
