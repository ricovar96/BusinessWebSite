import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2';
  constructor() {  }  
  slides = [ 
  {'image': './assets/image2.jpg'}, 
  {'image': './assets/image.jpg'},
  {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
  {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},
  {'image': 'https://get.pxhere.com/photo/landscape-mountain-road-mountain-range-travel-formation-panoramic-park-usa-canyon-national-park-red-rock-arizona-badlands-way-sedona-landform-cathedral-rock-geographical-feature-mountainous-landforms-648169.jpg'}];
}
