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
      { title: 'Induction´s day Presentation', description: 'Review Induction´s day Presentation', sourceLink: 'https://www.google.com' },
      { title: 'Outlook Email Signature', description: 'Set Up your email signature', sourceLink: 'https://www.google.com' }
    ]},
    {Name : "How-To", 
    Links: [ 
      { title: 'Reach me out', description: 'You can send me a message through LinkedIn Chat', sourceLink: 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/' },
      { title: 'Modern WorkPlace', description: 'Set up your Mobile Devide', sourceLink: 'https://www.google.com' },
      { title: 'How to request External CE credits', description: ' Learn How to rquest CE credits from courses in internal websites', sourceLink: 'https://www.google.com' },
      { title: 'How to request VISA Home', description: 'Find the way to request access to your corporate credit card summary', sourceLink: 'https://www.google.com' }
    ]},
    {Name : "Developers", 
    Links: [ 
      { title: 'Microsoft Developers Studio (MSDN)', description: 'Get a MSDN Suscription.', sourceLink: 'https://www.google.com' },
      { title: 'Chocolatey', description: 'This is a auto-installer with basic tools', sourceLink: 'https://www.google.com' }
    ]},
    {Name : "Policies", 
    Links: [ 
      { title: 'Clean desk policy', description: 'Keep compliance with your desk´s organization.', sourceLink: 'https://www.google.com' },
    ]}
  ]
  



}
