import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  slides = [ 
    {'image': './assets/BannerTTT.jpg', 'text':'¡Conoce al equipo de TTT Argentina Aqui!', 'link': '/Team'}, 
    {'image': './assets/Slide2.JPG', 'text':'¿En busca de un Link en particular? ¡Ingresa aca y consiguelo!', 'link': '/Links'}];

  ngOnInit(): void {
  }

}
