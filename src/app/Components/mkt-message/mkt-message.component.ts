import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-mkt-message',
  templateUrl: './mkt-message.component.html',
  styleUrls: ['./mkt-message.component.css'],
  animations:[
    trigger('fadeIn', [
      transition('void => *', [
        animate('1000ms',
        keyframes ([
          style({
            opacity: 0,
          }),
          style({
            opacity: 1,
          })
        ]
        ))
      ])
  ]
  )
  ]
})
export class MktMessageComponent implements OnInit {

  constructor() { }

  Headers = [{
    'image': 'https://www.hotelvalles.com.ar/wp-content/uploads/2017/07/10-internetwi-fi.png',
    'title':'Upload your Internet Bill',
    'Description': 'If you upload your internet Bill at time, you can receive your reimbursement soon!',
    'ButtonLink': 'https://www.google.com',
    'DescriptionButton': 'Upload Your Bill'},
    {
      'image': 'https://icons.iconarchive.com/icons/martz90/circle/512/outlook-icon.png',
      'title':'Custom your sign Outlook',
      'Description': 'Remember set your name, your position and the Department you work',
      'ButtonLink': 'https://www.google.com',
      'DescriptionButton': 'Custom your sign'
    },
    {
      'image': 'https://pngimg.com/uploads/cv/cv_PNG1.png',
      'title':'Refeer your acquantance',
      'Description': 'Upload the Relative, friend or acquaintance CV and earn a Bonus!',
      'ButtonLink': 'https://www.google.com',
      'DescriptionButton': 'Upload CV'
    }
    ];

  ngOnInit(): void {
  }

}
