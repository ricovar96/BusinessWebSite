import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {

  @Input() Name: string;
  @Input() Role: string;
  @Input() Birthday: string;
  @Input() FunFact: string;
  @Input() LinkedinLink: string;
  @Input() ProfileImage: string;
  @Input() IsTeamLeader: boolean;
  @Input() Team: string;
  @Output() TeamSeleccionado = new EventEmitter<string>();
  @Output() propagar = new EventEmitter<string>();

  constructor() {
   }

  ngOnInit(): void {
  }

  onPropagar(Team) {
    this.propagar.emit(Team);
  }

  goTeam(Team:string){
    this.TeamSeleccionado.emit('test');
  }
  

}
