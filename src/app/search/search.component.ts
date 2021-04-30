import { Component } from '@angular/core';
import { Link } from './Link.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  searchText: Link;

  Groups=[
    {Name : "Induction´s Day", 
    Links: [ 
      { title: 'Induction´s day Presentation', description: 'Review Induction´s day Presentation', sourceLink: 'https://sites.ey.com/:p:/s/TTTArgentina/EZkn83F7cURHulHQlPWKT3AB8Nz1wjgzMFk6Xk024D-tvA' },
      { title: 'Outlook Email Signature', description: 'Set Up your email signature', sourceLink: 'https://eygb.sharepoint.com/sites/TheBrandingZone/EY-Email-Signature-Tool/sitePages/Email-Signature.aspx' }
    ]},
    {Name : "How-To", 
    Links: [ 
      { title: 'Modern WorkPlace', description: 'Set up your Mobile Devide', sourceLink: 'https://sites.ey.com/sites/modernworkplace' },
      { title: 'How to request External CE credits', description: ' Learn How to rquest CE credits from courses in internal websites', sourceLink: 'https://sites.ey.com/sites/TTTArgentina/Documents/How%20to%20request%20external%20CE%20Credits.pdf' },
      { title: 'How to request VISA Home', description: 'Find the way to request access to your corporate credit card summary', sourceLink: 'https://sites.ey.com/sites/TTTArgentina/SitePages/Visa%20Home%20-%20Request.aspx' }
    ]},
    {Name : "Developers", 
    Links: [ 
      { title: 'Microsoft Developers Studio (MSDN)', description: 'Get a MSDN Suscription.', sourceLink: 'https://ey.service-now.com/ey/?id=request_services' },
      { title: 'Chocolatey', description: 'This is a auto-installer with basic tools', sourceLink: 'https://sites.ey.com/sites/TTTArgentina/SitePages/ChocolatEY.aspx' }
    ]},
    {Name : "Policies", 
    Links: [ 
      { title: 'Clean desk policy', description: 'Keep compliance with your desk´s organization.', sourceLink: 'https://sites.ey.com/:b:/s/TaxOpsBA/Public/Efyklzwk9Y1Gva1Qy7l1LE8BwHsSi_aUpNyKk4gxmwFZdA' },
      { title: 'Chocolatey', description: 'This is a auto-installer with basic tools', sourceLink: 'https://sites.ey.com/sites/TTTArgentina/SitePages/ChocolatEY.aspx' },
      { title: 'Microsoft Developers Studio (MSDN)', description: 'Get a MSDN Suscription.', sourceLink: 'https://ey.service-now.com/ey/?id=request_services' },
      { title: 'Chocolatey', description: 'This is a auto-installer with basic tools', sourceLink: 'https://sites.ey.com/sites/TTTArgentina/SitePages/ChocolatEY.aspx' },
      { title: 'Microsoft Developers Studio (MSDN)', description: 'Get a MSDN Suscription.', sourceLink: 'https://ey.service-now.com/ey/?id=request_services' },
      { title: 'Chocolatey', description: 'This is a auto-installer with basic tools', sourceLink: 'https://sites.ey.com/sites/TTTArgentina/SitePages/ChocolatEY.aspx' }
    ]}
  ]
  



}
