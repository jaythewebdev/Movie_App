import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieApp';

  constructor(private router:Router) {

  }
  openAddMovie(){
    this.router.navigate(["movie"]);
  }
}


