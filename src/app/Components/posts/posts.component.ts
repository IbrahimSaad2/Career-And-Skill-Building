import { Component } from '@angular/core';
interface IPosts{
  id:number,
  title:string,
  location:string,
  since:string,
  capacity:string,
  imgSrc:string
}
@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  tracks:string[] = ["Web","UI/UX","Mobile"];

  posts:IPosts[] = [
    {
    id : 1,
    title:'Software Engineer Internship Global Program- Jumia (Full Time)',
    location:'Egypt(on-site)',
    since:'1 days ago',
    capacity:'Over 100 people clicked apply',
    imgSrc:'./assets/Img/images.jpeg'
  },
  {
    id : 1,
    title:'Software Engineer Internship Global Program- Jumia (Full Time)',
    location:'Egypt(on-site)',
    since:'1 days ago',
    capacity:'Over 100 people clicked apply',
    imgSrc:'./assets/Img/Orange_logo.svg.png'
  },
  {
    id : 1,
    title:'Software Engineer Internship Global Program- Jumia (Full Time)',
    location:'Egypt(on-site)',
    since:'1 days ago',
    capacity:'Over 100 people clicked apply',
    imgSrc:'./assets/Img/images.jpeg'
  },

];

}
