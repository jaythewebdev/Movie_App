import { Component } from '@angular/core';
import { movieModel } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movie:movieModel;
constructor(){
this.movie=new movieModel(1,"Singam","2:30","Honest police officer Durai Singam locks horns with big-time extortionist Mayil Vaaganam.",0,0);

}
addLikes(){
  this.movie.Likes++;
}
addDisLikes(){
  this.movie.DisLikes++;
}
}
