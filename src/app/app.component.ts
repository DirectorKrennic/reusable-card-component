import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageURL: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree this morning'
    },
    {
      title: 'Snow mountain',
      imageURL: 'assets/mountain.jpeg',
      username: 'mountain-lover',
      content: 'Here is a picture of a snow mountain'
    },
    {
      title: 'Mountain Biking',
      imageURL: 'assets/biking.jpeg',
      username: 'Biking',
      content: 'Went cycling this morning'
    },
  ]
}
