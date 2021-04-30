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
    'title':'Carga tu factura de Internet',
    'Description': 'En pocos clicks ya estaras recibiendo el reintegro de tu factura de internet',
    'ButtonLink': 'https://internal.ey.net/sites/GDSArgOpsAutomationCenter/Talent/ExpenseBenefitReport/Sitepages/HomePage.aspx',
    'DescriptionButton': 'Cargar Factura'},
    {
      'image': 'https://icons.iconarchive.com/icons/martz90/circle/512/outlook-icon.png',
      'title':'Configura tu firma de Outlook',
      'Description': 'Recuerda colocar tu nombre, cargo que ocupas y Departamento donde trabajas',
      'ButtonLink': 'https://eygb.sharepoint.com/sites/TheBrandingZone/EY-Email-Signature-Tool/sitePages/Email-Signature.aspx',
      'DescriptionButton': 'Cambiar firma'
    },
    {
      'image': 'https://pngimg.com/uploads/cv/cv_PNG1.png',
      'title':'Refiere a tu conocido',
      'Description': 'Carga el CV de tu familiar, amigo y/o conocido en el site donde se te dirigira',
      'ButtonLink': 'https://tas-ey.taleo.net/careersection/gintcs01/jobsearch.ftl?lang=en',
      'DescriptionButton': 'Cargar el CV'
    }
    ];

  ngOnInit(): void {
  }

}
