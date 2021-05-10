import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  slides = [ 
    {'image': './assets/BannerTeam.jpg', 'text':'Meet our Team! Click Here', 'link': 'BusinessWebSite/Team'}, 
    {'image': './assets/BannerLink.jpg', 'text':'Are you looking for a specific Link? Click Here!', 'link': 'BusinessWebSite/Links'}];

  ngOnInit(): void {
  }

}
