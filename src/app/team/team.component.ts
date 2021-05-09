import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  //LinkedinLinkLink=["fa fa-facebook fa-2x","fa fa-twitter fa-2x","fa fa-instagram fa-2x"];

  constructor() {
      this.Team=this.TTTTeam.Teams[0];
   }

   Team:any;

   procesaPropagar(mensaje) {
    console.log(mensaje);
    switch(mensaje) { 
      case 'ABC Business LLC': { 
        this.Team=this.TTTTeam.Teams[0];
        break; 
      } 
      case 'Developer Team': { 
        this.Team=this.TTTTeam.Teams[1];
        console.log(this.Team);
        break; 
      } 
      case 'VMO Team': { 
        this.Team=this.TTTTeam.Teams[2];
        break; 
      } 
    default: { 
      console.log('error')
      break; 
   } 
  } 
  }
    TTTTeam=
    { 
      DepartamentName: 'ABC Business LLC',
      Teams:
      [
        {
          TeamName: "ABC Business LLC",
          SubTeams: 
          [
            {SubTeamName: 'Our Managers',
              SubTeamMembers: 
              [
                {
                'Name': 'Olivia Smith',
                'Role': 'Manager',
                'Birthday': '8/12/2019',
                'FunFact': 'I hate flying. I love airports, lounges, and elite status, but the act of flying makes me sick.',
                'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/', 
                'ProfileImage': './assets/Olivia.jpg',
                'IsTeamLeader':false,
                'Team': 'NO'
                },
                {
                'Name': 'James Jonhson',
                'Role': 'Finance Manager',
                'Birthday': '8/6/2019',
                'FunFact': 'When I was younger, I was obsessed with Pinky and the Brain. I even had a T-shirt collection',
                'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/', 
                'ProfileImage': './assets/James.jpg',
                'IsTeamLeader': false,
                'Team': 'NO'
                },
                {
                'Name': 'Sophia Williams',
                'Role': 'VMO Manager',
                'Birthday': '8/11/2019',
                'FunFact': 'I went to college to be a high school history teacher. I’m still technically certified to teach high school history',
                'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/', 
                'ProfileImage': './assets/Sophia.jpg',
                'IsTeamLeader': true,
                'Team': 'VMO Team'
                },
                {
                'Name': 'Charlotte Brown',
                'Role': 'Project Manager',
                'Birthday': '01/01/2016',
                'FunFact': 'I’m a huge fan of soul, Motown, blues, and jazz. It’s way better than any of the pop music out there.',
                'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/',
                'ProfileImage': './assets/Charlotte.jpg',
                'IsTeamLeader': true,
                'Team': 'Developer Team'
                }
              ]
            }
          ]
        },
        {
          TeamName: "Developer Team",
          SubTeams: 
          [
            {
              SubTeamName: 'Developer Manager',
              SubTeamMembers: 
              [
                {
                  'Name': 'Charlotte Brown',
                  'Role': 'Developer Manager',
                  'Birthday': '01/01/2016',
                  'FunFact': 'I’m a huge fan of soul, Motown, blues, and jazz. It’s way better than any of the pop music out there.',
                  'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/',
                  'ProfileImage': './assets/Charlotte.jpg',
                  'IsTeamLeader': true,
                  'Team': 'ABC Business LLC'
                }
              ]
            },
            {
              SubTeamName: 'Developer Team',
              SubTeamMembers: 
              [
                {
                'Name': 'Robert Jones',
                'Role': '.Net Dev Lead',
                'Birthday': '01/01/2016',
                'FunFact': 'I’m a Japanophile. I love everything about the culture: the food, the history, the etiquette, the landscape, the architecture — all of it. I would eat sushi every day if I could.',
                'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/',
                'ProfileImage': './assets/Robert.jpg',
                'IsTeamLeader': false,
                'Team': 'NO'
                },
                {
                'Name': 'John Reyes',
                'Role': '.Net Dev',
                'Birthday': '01/01/2016',
                'FunFact': 'I’m an unabashed Taylor Swift fan. Not only do I think she’s an incredible businesswoman and marketer, but I also love her cheesy pop songs.',
                'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/',
                'ProfileImage': './assets/John.jpg',
                'IsTeamLeader': false,
                'Team': 'NO'
                },
                {
                'Name': 'Elizabeth Miller',
                'Role': 'QA',
                'Birthday': '21/2/2019',
                'FunFact': ' I drink tea. Lots of it. Especially green tea. That’s my drink of choice!',
                'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/',
                'ProfileImage': './assets/Elizabeth.jpg',
                'IsTeamLeader': false,
                'Team': 'NO'
                }
              ]
            }
          ]
        },
        {
          TeamName: "Vendor Management Office Team",
          SubTeams: 
          [
            {
              SubTeamName: 'VMO Manager',
              SubTeamMembers: 
              [
                {
                  'Name': 'Sophia Williams',
                  'Role': 'Vendor Management Office',
                  'Birthday': '8/11/2019',
                  'FunFact': 'I went to college to be a high school history teacher. I’m still technically certified to teach high school history',
                  'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/', 
                  'ProfileImage': './assets/Sophia.jpg',
                  'IsTeamLeader': true,
                  'Team': 'ABC Business LLC'
                }
              ]
            },
            {
              SubTeamName: 'Project Manager Team',
              SubTeamMembers: 
              [
                {
                'Name': 'Isabella Davis',
                'Role': 'Product Owner',
                'Birthday': '01/01/2016',
                'FunFact': 'I don’t eat sweets. Maybe once a year I’ll have a cookie or brownie but, for the most part, I don’t do desserts or sweets as I don’t like all the sugar.',
                'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/',
                'ProfileImage': './assets/Isabella.jpg',
                'IsTeamLeader': false,
                'Team': 'NO'
                },
                {
                'Name': 'Emma Garcia',
                'Role': 'Business Analyst',
                'Birthday': '01/01/2016',
                'FunFact': ' When I’m working, I’ll often play one song on repeat over and over again. It helps me focus because it ends up just being white noise. ',
                'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/',
                'ProfileImage': './assets/Emma.jpg',
                'IsTeamLeader': false,
                'Team': 'NO'
                },
                {
                'Name': 'Michael Rodriguez',
                'Role': 'Scrum Master',
                'Birthday': '21/2/2019',
                'FunFact': 'After college, I also worked at a hospital doing administrative work for the BMT and surgery departments.',
                'LinkedinLink': 'https://www.linkedin.com/in/fabian-daniel-rico-vargas-89731a107/',
                'ProfileImage': './assets/Michael.jpg',
                'IsTeamLeader': false,
                'Team': 'NO'
                }
              ]
            }
          ]
        }
      ]
    }

}
