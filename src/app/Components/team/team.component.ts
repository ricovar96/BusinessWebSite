import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  //LinkedinLinkLink=["fa fa-facebook fa-2x","fa fa-twitter fa-2x","fa fa-instagram fa-2x"];

  constructor() {
    // this.Team=this.TTTTeam[0];
      this.Team=this.TTTTeam.Teams[0];
      console.log(this.Team);
   }

   Team:any;

   procesaPropagar(mensaje) {
    console.log(mensaje);
    switch(mensaje) { 
      case 'Tax Technology and Transformation': { 
        this.Team=this.TTTTeam.Teams[0];
        break; 
      } 
      case 'ATTG Dev': { 
        this.Team=this.TTTTeam.Teams[1];
        console.log(this.Team);
        break; 
      } 
      case 'ATTG Finance': { 
        this.Team=this.TTTTeam.Teams[2];
        break; 
      } 
      case 'FSO': { 
        this.Team=this.TTTTeam.Teams[3];
        break; 
    } 
    case 'GTP': { 
      this.Team=this.TTTTeam.Teams[4];
      break; 
    } 
    case 'ATTG PMO': { 
      this.Team=this.TTTTeam.Teams[5];
      break; 
    } 
    default: { 
      console.log('error')
      break; 
   } 
  } 
  }

  // TTTTeam=[
  //   { DepartamentName: 'Tax Technology and Transformation',
  //   Teams: [
  //     {TeamName: 'TTT Leaders',
  //     Members: [
  //       {
  //         'Name': 'Emiliano Erausquin',
  //         'Role': 'TTT Manager',
  //         'Birthday': '8/12/2019',
  //         'FunFact': 'Coleccionista de cómics y figuras de acción.​​ Dibujante/tatuador frustrado. Soy tarotista además de gerente en EY 😝',
  //         'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //         'ProfileProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/emiliano_erausquin_gds_ey_com_LThumb.jpg?t=63704517372',
  //         'IsTeamLeader':false,
  //         'Team': 'NO'
  //         },
  //       {
  //         'Name': 'Douglas Borrero Villamizar',
  //         'Role': 'ATTG Dev Manager',
  //         'Birthday': '11/6/2019',
  //         'FunFact': 'A veces compro 1 metro de plástico de envolver, solo para reventar las burbujas',
  //         'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //         'ProfileProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/douglas_f_borrero_villamizar_gds_ey_com_LThumb.jpg?t=63727904725',
  //         'IsTeamLeader': true,
  //         'Team': 'ATTG Dev'
  //         },
  //         {
  //         'Name': '	Lorena Wolczanski',
  //         'Role': 'ATTG Finance Manager',
  //         'Birthday': '14/11/2019',
  //         'FunFact': '	Siempre digo que mi sueño es tener un puesto de Coca Cola en alguna playa paradisiaca',
  //         'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/lorena_b_wolczanski_gds_ey_com_LThumb.jpg?t=63701578620',
  //         'IsTeamLeader': true,
  //         'Team': 'ATTG Finance'
  //         },
  //         {
  //         'Name': 'Patricia Pessoa',
  //         'Role': 'ATTG PMO Manager',
  //         'Birthday': '03/27/1996',
  //         'FunFact': 'Me gusta hacer videos de TikTok, la lectura, ver series y hacer DIY',
  //         'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/patricia_pessoa_de_oliveira_gds_ey_com_LThumb.jpg?t=63738209243',
  //         'IsTeamLeader': true,
  //         'Team': 'ATTG PMO'
  //         },
  //         {
  //           'Name': 'Gustavo Orteu',
  //           'Role': 'FSO Manager',
  //           'Birthday': '30/06/2019',
  //           'FunFact': 'Una vez me olvidé las llaves de casa y entré por la ventana colgándome desde la terraza (¡vivo en un 7mo piso!)',
  //           'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/Gustavo_Orteu_gds_ey_com_LThumb.jpg?t=63738296118',
  //           'IsTeamLeader': true,
  //           'Team': 'FSO'
  //           },
  //           {
  //           'Name': 'Gustavo Orteu',
  //           'Role': 'GTP Manager',
  //           'Birthday': '30/06/2019',
  //           'FunFact': 'Una vez me olvidé las llaves de casa y entré por la ventana colgándome desde la terraza (¡vivo en un 7mo piso!)',
  //           'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/Gustavo_Orteu_gds_ey_com_LThumb.jpg?t=63738296118',
  //           'IsTeamLeader': true,
  //           'Team': 'GTP'
  //           }
  //     ]
  //     }
  //   ]
  //   },
  //   { TeamName: 'ATTG Dev Team',
  //     Teams: [
  //       {SubTeamName: 'ATTG Dev Manager',
  //       Members: [
  //         {
  //           'Name': 'Douglas Borrero Villamizar',
  //           'Role': 'ATTG Dev Manager',
  //           'Birthday': '11/6/2019',
  //           'FunFact': 'A veces compro 1 metro de plástico de envolver, solo para reventar las burbujas',
  //           'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/douglas_f_borrero_villamizar_gds_ey_com_LThumb.jpg?t=63727904725',
  //           'Team': 'Tax Technology and Transformation'
  //           }
  //       ]
  //       },
  //       {SubTeamName: 'ADMN',
  //       Members: [
  //         {
  //           'Name': 'Ruben Cordero',
  //           'Role': '.Net Dev Lead',
  //           'Birthday': '03/27/1996',
  //           'FunFact': 'Empecé a nadar porque una vez hace 5 años, casi me ahogo en Brasil. Y a partir de ese momento dije que no podía pasarme de nuevo.',
  //           'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/ruben_cordero_gds_ey_com_LThumb.jpg?t=63673764058',
  //           'Team': 'NO'
  //           },
  //           {
  //           'Name': 'Harold Reyes',
  //           'Role': '.Net Dev',
  //           'Birthday': '03/27/1996',
  //           'FunFact': 'Me gusta Correr, las Artes marciales y estudiar',
  //           'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/harold_t_cesar_reyes_gds_ey_com_LThumb.jpg?t=63696547813',
  //           'Team': 'NO'
  //           },
  //           {
  //           'Name': 'Juan Ignacio Boccardo',
  //           'Role': '.Net Dev',
  //           'Birthday': '21/2/2019',
  //           'FunFact': 'Soy zurdo. Mi familia, amigos y conocidos me dicen Lolo (me pueden decir así)',
  //           'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/juan_ignacio_boccardo_gds_ey_com_LThumb.jpg?t=63718847395',
  //           'Team': 'NO'
  //           },
  //           {
  //             'Name': 'Fabian Rico',
  //             'Role': '.Net Dev',
  //             'Birthday': '27/03/1996',
  //             'FunFact': 'Una vez me tiré de una piedra alta en la playa (aprox un 2 piso) por diversión, y el lugar donde caías era un hueco (en el mar) rodeado de piedras.',
  //             'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //             'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/fabian_d_rico_vargas_gds_ey_com_LThumb.jpg?t=63705185466',
  //             'Team': 'NO'
  //           }
  //       ]
  //       },
  //       {SubTeamName: 'SAM',
  //       Members: [
  //       {
  //       'Name': 'Maximiliano Pozzi',
  //       'Role': '.Net Dev',
  //       'Birthday': '3/8/2019',
  //       'FunFact': 'Tocando en vivo, estaba haciendo la intro de un tema y me caí del escenario (1.5m de alto). Por suerte caí parado y me dio tiempo a subir y seguir tocando como si nada hubiera pasado.',
  //       'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //       'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/maximiliano_e_pozzi_gds_ey_com_LThumb.jpg?t=63689199507',
  //       'Team': 'NO'
  //       }
  //       ]
  //       },
  //       {SubTeamName: 'AssetMine',
  //       Members: [
  //       {
  //       'Name': 'Facundo Romeo Aparicio',
  //       'Role': 'Quality Assurance',
  //       'Birthday': '5/2/2019',
  //       'FunFact': 'Me gusta comer ajo y picante a la mañana junto con mi café.',
  //       'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //       'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/facundo_romeo_aparicio_gds_ey_com_LThumb.jpg?t=63691706708',
  //       'Team': 'NO'
  //       },
  //       {
  //     'Name': 'Sebastián Simone',
  //     'Role': 'Quality Assurance',
  //     'Birthday': '5/11/2019',
  //     'FunFact': 'Fabricar equipos de audio para instrumentos. Estoy intentando tener una huerta en casa. Salí en la tele hablando de lo bueno que estaba usar la SUBE',
  //     'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //     'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/sebastian_p_simone_gds_ey_com_LThumb.jpg?t=63693696059',
  //     'Team': 'NO'
  //     }
  //     ]
  //     },
  //       {SubTeamName: 'FTTS - ShareTrust - Unicorn',
  //       Members: [
  //         {
  //           'Name': 'Douglas Borrero Villamizar',
  //           'Role': '.NET Developer',
  //           'Birthday': '11/6/2019',
  //           'FunFact': 'A veces compro 1 metro de plástico de envolver, solo para reventar las burbujas',
  //           'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/douglas_f_borrero_villamizar_gds_ey_com_LThumb.jpg?t=63727904725',
  //           'Team': 'NO'
  //           },
  //     {
  //       'Name': '	Gonzalo Maciel Cáceres',
  //       'Role': '.NET Developer',
  //       'Birthday': '9/2/2019',
  //       'FunFact': 'Mirar fútbol (soy de Rive). Carreras de Fórmula 1. Leer sobre tecnología.​ Adoro Star Trek (sí, extremadamente nerd)',
  //       'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //       'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/gonzalo_r_maciel_caceres_gds_ey_com_LThumb.jpg?t=63714626698',
  //       'Team': 'NO'
  //       }
  //       ]
  //       },
  //       {SubTeamName: 'ITTS',
  //       Members: [
  //       {
  //       'Name': 'Jonatan Bilstein',
  //       'Role': '.NET Developer',
  //       'Birthday': '4/11/2019',
  //       'FunFact': 'Conozco casi todas las comidas árabes habidas y por haber con su nombre y pronunciación original.',
  //       'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //       'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/jonatan_r_bilstein_gds_ey_com_LThumb.jpg?t=63667945898',
  //       'Team': 'NO'
  //       }
  //       ]
  //       },
  //       {SubTeamName: 'Production Support',
  //       Members: [
  //       {
  //       'Name': 'Rolando Melian',
  //       'Role': '.NET Developer',
  //       'Birthday': '4/11/2019',
  //       'FunFact': 'Conozco casi todas las comidas árabes habidas y por haber con su nombre y pronunciación original.',
  //       'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //       'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/rolando_j_melian_gds_ey_com_LThumb.jpg?t=63720227211',
  //       'Team': 'NO'
  //       }
  //       ]
  //       }
  //     ]
  //   },
  //   { TeamName: 'ATTG Finance Team',
  //   Teams: [
  //     {SubTeamName: 'ATTG Finance Manager',
  //     Members: [
  //       {
  //         'Name': '	Lorena Wolczanski',
  //         'Role': 'ATTG Finance Manager',
  //         'Birthday': '14/11/2019',
  //         'FunFact': '	Siempre digo que mi sueño es tener un puesto de Coca Cola en alguna playa paradisiaca',
  //         'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/lorena_b_wolczanski_gds_ey_com_LThumb.jpg?t=63701578620',
  //         'Team': 'Tax Technology and Transformation' 
  //         //IsTeamLeader: Yes/No
  //         }
  //     ]
  //     },
  //     {SubTeamName: 'ATTG Finance',
  //     Members: [
  //       {
  //         'Name': '	Lorena Wolczanski',
  //         'Role': 'ATTG Finance Manager',
  //         'Birthday': '14/11/2019',
  //         'FunFact': '	Siempre digo que mi sueño es tener un puesto de Coca Cola en alguna playa paradisiaca',
  //         'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/lorena_b_wolczanski_gds_ey_com_LThumb.jpg?t=63701578620',
  //         'Team': 'Tax Technology and Transformation'
  //         },
  //         {
  //         'Name': 'Carolina Murgi',
  //         'Role': 'Financial Analyst',
  //         'Birthday': '22/6/2019',
  //         'FunFact': 'Practicar yoga. Organizar eventos. Viajar. Tengo TOC (pero nada zarpado)',
  //         'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/maria_c_murgi_gds_ey_com_LThumb.jpg?t=63688166361',
  //         'Team': 'NO'
  //         },
  //         {
  //         'Name': 'Maria Manzanilla Toro',
  //         'Role': 'Financial Analyst',
  //         'Birthday': '19/2/2019',
  //         'FunFact': 'Ver series y películas especialmente de suspenso. Leer libros de crímenes​. Fun Facts	Me encanta todo lo que tiene limón, desde tequila hasta pie de limón',
  //         'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/maria_v_manzanilla_toro_gds_ey_com_LThumb.jpg?t=63700370498',
  //         'Team': 'NO'
  //         },
  //         {
  //           'Name': 'Philips Añangurens Aguilarte',
  //           'Role': 'Financial Analyst',
  //           'Birthday': '9/2/2019',
  //           'FunFact': '​Leer. Bullet Journal. Correr. Tejer. Una vez fui a un concierto de David Guetta en la gran muralla china.',
  //           'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/philips_j_anangurens_aguilarte_gds_ey_com_LThumb.jpg?t=63706940666',
  //           'Team': 'NO'
  //         },
  //         {
  //           'Name': 'Macarena Vergara',
  //           'Role': 'Financial Analyst',
  //           'Birthday': '9/2/2019',
  //           'FunFact': '​Leer. Bullet Journal. Correr. Tejer. Una vez fui a un concierto de David Guetta en la gran muralla china.',
  //           'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
  //           'ProfileImage': '',
  //           'Team': 'NO'
  //         }
  //     ]
  //     }
  //   ]
  //   },
  //   { TeamName: 'FSO Team',
  //   Teams: [
  //     {SubTeamName: 'FSO Manager',
  //     Members: [
  //         {
  //           'Name': 'Gustavo Orteu',
  //           'Role': 'FSO Manager',
  //           'Birthday': '30/06/2019',
  //           'FunFact': 'Una vez me olvidé las llaves de casa y entré por la ventana colgándome desde la terraza (¡vivo en un 7mo piso!)',
  //           'LinkedinLink': ['https://www.facebook.com/gus.orteu','','https://www.instagram.com/gus.orteu/'],
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/Gustavo_Orteu_gds_ey_com_LThumb.jpg?t=63738296118',
  //           'Team': 'Tax Technology and Transformation'
  //           }
  //     ]
  //     },
  //     {SubTeamName: 'BI/Alteryx',
  //     Members: [
  //       {
  //         'Name': 'Marcelo Iglesias',
  //         'Role': 'Business Intelligence',
  //         'Birthday': '1/6/2019',
  //         'FunFact': 'Descubrir que me encantan los perros (por mi ovejera) a los casi 40 años cuando toda la vida tuve gatitos.',
  //         'LinkedinLink': ['https://www.facebook.com/lorena.wolczanski/','','https://www.instagram.com/lorewol/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/marcelo_iglesias_gds_ey_com_LThumb.jpg?t=63672975719',
  //         'Team': 'NO'
  //         },
  //         {
  //         'Name': 'Rocío López',
  //         'Role': 'Business Intelligence',
  //         'Birthday': '18/9/2019',
  //         'FunFact': 'Saludo siempre con “buen día”, sin importar la hora que sea',
  //         'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/rocio_s_lopez_gds_ey_com_LThumb.jpg?t=63706226709',
  //         'Team': 'NO'
  //         },
  //         {
  //         'Name': 'Araceli Lagostena',
  //         'Role': 'Business Intelligence',
  //         'Birthday': '24/9/2019',
  //         'FunFact': 'Juegos de cartas. Todo lo que tenga que ver con Netfli and Chill. Googleadora compulsiva y loca (esclava) de los gatos.',
  //         'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/araceli_b_lagostena_gds_ey_com_LThumb.jpg?t=63728768584',
  //         'Team': 'NO'
  //         },
  //         {
  //           'Name': 'Tamara Rodriguez',
  //           'Role': 'Business Intelligence',
  //           'Birthday': '2/3/1996',
  //           'FunFact': '​Tengo una foto con Julian Casablancas. Una vez me desmayé en un recital de Foo Fighters. Mi perrito se llama Haiku porque huge poetry & japanese culture nerd.',
  //           'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/tamara_a_rodriguez_gds_ey_com_LThumb.jpg?t=63709080190',
  //           'Team': 'NO'
  //         },
  //         {
  //           'Name': 'Gonzalo Avila',
  //           'Role': 'Business Intelligence',
  //           'Birthday': '11/1/1993',
  //           'FunFact': '​	Participé de Supercampeones (el torneo de fútbol interescolar que pasaban por Magic Kids). Tengo un kid Goku tatuado.',
  //           'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/gonzalo_e_avila_gds_ey_com_LThumb.jpg?t=63707545264',
  //           'Team': 'NO'
  //         },
  //         {
  //           'Name': 'Vanessa Neira',
  //           'Role': 'Business Intelligence',
  //           'Birthday': '',
  //           'FunFact': '​Amo los zapatos, tengo más de 70 pares :S. Salir a pasear con mi perro y leer 😊',
  //           'LinkedinLink': 'https://www.linkedin.com/in/vanessa-neira/',
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/maria_v_neira_murillo_gds_ey_com_LThumb.jpg?t=63738728733',
  //           'Team': 'NO'
  //         }
  //     ]
  //     },
  //     {SubTeamName: 'LATAM',
  //     Members: [
  //       {
  //         'Name': 'Diego Andrada',
  //         'Role': '.Net Developer',
  //         'Birthday': '28/9/1985',
  //         'FunFact': '​Cocinar, Leer, Ir al gimnasio y Me encantan los chismes de la gente famosa de la TV.',
  //         'LinkedinLink': ['https://www.facebook.com/lorena.wolczanski/','','https://www.instagram.com/lorewol/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/diego_andrada_gds_ey_com_LThumb.jpg?t=63717554448',
  //         'Team': 'NO'
  //         },
  //         {
  //         'Name': 'Gaston Moscaranda',
  //         'Role': '.Net Developer',
  //         'Birthday': '18/9/2019',
  //         'FunFact': 'Saludo siempre con “buen día”, sin importar la hora que sea',
  //         'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/gaston_moscarda_gds_ey_com_LThumb.jpg?t=63715118743',
  //         'Team': 'NO'
  //         },
  //         {
  //         'Name': 'Alejandra Parejo Nucete',
  //         'Role': 'Quality Assurance',
  //         'Birthday': '23/3/2019',
  //         'FunFact': '​ Me gusta la Fotografía, Escritura, Viajes y Comida. Amo comer ñoquis con Nutella',
  //         'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/alejandra_parejo_nucete_gds_ey_com_LThumb.jpg?t=63688508396',
  //         'Team': 'NO'
  //         }
  //     ]
  //     },
  //     {SubTeamName: 'SharePoint',
  //     Members: [
  //       {
  //         'Name': 'Mariela Gualdi',
  //         'Role': 'SharePoint Developer',
  //         'Birthday': '18/9/2019',
  //         'FunFact': 'Mi perra me roba el asiento del sillón de una manera muy ingeniosa, hace que quiere jugar y cuando te levantas para jugarle se sienta en tu lugar.',
  //         'LinkedinLink': ['https://www.facebook.com/lorena.wolczanski/','','https://www.instagram.com/lorewol/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/mariela_a_gualdi_gds_ey_com_LThumb.jpg?t=63727318583',
  //         'Team': 'NO'
  //         },
  //         {
  //         'Name': 'Matias Sola',
  //         'Role': 'SharePoint Developer',
  //         'Birthday': '9/11/2019',
  //         'FunFact': 'Siempre elijo series de televisión con más de 2 temporadas, eso significa que no me aburriré pronto, al menos ...',
  //         'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/matias_h_sola_gds_ey_com_LThumb.jpg?t=63671929528',
  //         'Team': 'NO'
  //         },
  //         {
  //         'Name': 'Anna Fernández',
  //         'Role': 'SharePoint Developer',
  //         'Birthday': '10/8/2000',
  //         'FunFact': 'Odio las celebridades; amo la palta; a veces hablo sola, just ignore me; califico como persona tímida',
  //         'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/anna_m_fernandez_hinojosa_gds_ey_com_LThumb.jpg?t=63708319478',
  //         'Team': 'NO'
  //         },
  //         {
  //           'Name': 'Rodrigo Carande',
  //           'Role': 'SharePoint Developer',
  //           'Birthday': '28/11/1991',
  //           'FunFact': '​Soy de los que salen de su casa y aunque hayan caminado un par de cuadras vuelven para fijarse si cerraron la puerta con llave.',
  //           'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/rodrigo_m_carande_gds_ey_com_LThumb.jpg?t=63707960470',
  //           'Team': 'NO'
  //         },
  //         {
  //           'Name': 'Carolina Sagarna',
  //           'Role': 'SharePoint Developer',
  //           'Birthday': '11/1/1993',
  //           'FunFact': '​	Participé de Supercampeones (el torneo de fútbol interescolar que pasaban por Magic Kids). Tengo un kid Goku tatuado.',
  //           'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/carolina_sagarna_gds_ey_com_LThumb.jpg?t=63731632698',
  //           'Team': 'NO'
  //         },
  //         {
  //           'Name': 'Maximiliano Tabares',
  //           'Role': 'SharePoint Developer',
  //           'Birthday': '11/1/1993',
  //           'FunFact': '​	Participé de Supercampeones (el torneo de fútbol interescolar que pasaban por Magic Kids). Tengo un kid Goku tatuado.',
  //           'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/maximiliano_j_tabares_martinez_gds_ey_com_LThumb.jpg?t=63730857609',
  //           'Team': 'NO'
  //         }
  //     ]
  //     }
  //   ]
  //   },
  //   { TeamName: 'GTP Team',
  //   Teams: [
  //     {SubTeamName: 'GTP Manager',
  //     Members: [
  //         {
  //           'Name': 'Gustavo Orteu',
  //           'Role': 'GTP Manager',
  //           'Birthday': '30/06/2019',
  //           'FunFact': 'Una vez me olvidé las llaves de casa y entré por la ventana colgándome desde la terraza (¡vivo en un 7mo piso!)',
  //           'LinkedinLink': ['https://www.facebook.com/gus.orteu','','https://www.instagram.com/gus.orteu/'],
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/Gustavo_Orteu_gds_ey_com_LThumb.jpg?t=63738296118',
  //           'Team': 'Tax Technology and Transformation'
  //           }
  //     ]
  //     },
  //     {SubTeamName: 'GTP',
  //     Members: [
  //       {
  //         'Name': 'Miguel Lope',
  //         'Role': '.Net Developer',
  //         'Birthday': '1/6/2019',
  //         'FunFact': 'Tengo una foto con Julian Casablancas. Una vez me desmayé en un recital de Foo Fighters. Mi perrito se llama Haiku porque huge poetry & japanese culture nerd.',
  //         'LinkedinLink': ['https://www.facebook.com/lorena.wolczanski/','','https://www.instagram.com/lorewol/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/miguel_a_lope_vargas_gds_ey_com_LThumb.jpg?t=63698118402',
  //         'Team': 'NO'
  //         },
  //         {
  //         'Name': '	Gustavo Borelli',
  //         'Role': 'Quality Assurance',
  //         'Birthday': '9/8/2019',
  //         'FunFact': 'Me gusta tener hobbies que los pobres no pueden afrontar. ¡Viva la burguesía!',
  //         'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/gustavo_g_borelli_gds_ey_com_LThumb.jpg?t=63715475072',
  //         'Team': 'NO'
  //         },
  //         {
  //         'Name': 'Pablo Caracciolo',
  //         'Role': 'Quality Assurance',
  //         'Birthday': '11/10/2019',
  //         'FunFact': 'Me gusta el Arte digital, Lectura de todo tipo, Videojuegos​ y Series. Estuve muerto unos segundos. No se me ocurrió algo divertido.',
  //         'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/pablo_e_caracciolo_gds_ey_com_LThumb.jpg?t=63707432337',
  //         'Team': 'NO'
  //         },
  //         {
  //           'Name': 'Quimey Orosco',
  //           'Role': 'Business Intelligence',
  //           'Birthday': '2/3/1996',
  //           'FunFact': '​Tengo una foto con Julian Casablancas. Una vez me desmayé en un recital de Foo Fighters. Mi perrito se llama Haiku porque huge poetry & japanese culture nerd.',
  //           'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //           'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/quimey_n_orosco_gds_ey_com_LThumb.jpg?t=63715898717',
  //           'Team': 'NO'
  //         },
  //         {
  //           'Name': 'Pilar',
  //           'Role': 'Business Intelligence',
  //           'Birthday': '11/1/1993',
  //           'FunFact': '​	Participé de Supercampeones (el torneo de fútbol interescolar que pasaban por Magic Kids). Tengo un kid Goku tatuado.',
  //           'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //           'ProfileImage': '',
  //           'Team': 'NO'
  //         }
  //     ]
  //     }
  //   ]
  //   },
  //   { TeamName: 'ATTG PMO Team',
  //   Teams: [
  //     {SubTeamName: 'ATTG PMO Manager',
  //     Members: [
  //       {
  //         'Name': 'Patricia Pessoa',
  //         'Role': 'ATTG PMO Manager',
  //         'Birthday': '03/27/1996',
  //         'FunFact': 'Me gusta hacer videos de TikTok, la lectura, ver series y hacer DIY',
  //         'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','','https://www.instagram.com/gus.orteu/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/patricia_pessoa_de_oliveira_gds_ey_com_LThumb.jpg?t=63738209243',
  //         'Team': 'Tax Technology and Transformation'
  //       }
  //     ]
  //     },
  //     {SubTeamName: 'ATTG PMO',
  //     Members: [
  //       {
  //         'Name': 'Patricia Pessoa',
  //         'Role': 'PMO',
  //         'Birthday': '03/27/1996',
  //         'FunFact': 'Me gusta hacer videos de TikTok, la lectura, ver series y hacer DIY',
  //         'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','','https://www.instagram.com/gus.orteu/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/patricia_pessoa_de_oliveira_gds_ey_com_LThumb.jpg?t=63738209243',
  //         'Team': 'NO'
  //       },
  //         {
  //         'Name': 'Sebastian Basadre',
  //         'Role': 'PMO',
  //         'Birthday': '9/8/2019',
  //         'FunFact': 'Me gusta tener hobbies que los pobres no pueden afrontar. ¡Viva la burguesía!',
  //         'LinkedinLink': ['https://www.instagram.com/Rickyspanishok/','https://www.instagram.com/','https://www.jw.org/'],
  //         'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/sebastian_r_basadre_gds_ey_com_LThumb.jpg?t=63731115409',
  //         'Team': 'NO'
  //         }
  //     ]
  //     }
  //   ]
  //   }
  // ]

   TTTTeam=
    { 
      DepartamentName: 'Tax Technology and Transformation',
      Teams:
      [
        {
          TeamName: "Tax Technology and Transformation",
          SubTeams: 
          [
            {SubTeamName: 'TTT Leaders',
              SubTeamMembers: 
              [
                {
                'Name': 'Emiliano Erausquin',
                'Role': 'TTT Manager',
                'Birthday': '8/12/2019',
                'FunFact': 'Coleccionista de cómics y figuras de acción.​​ Dibujante/tatuador frustrado. Soy tarotista además de gerente en EY 😝',
                'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
                'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/emiliano_erausquin_gds_ey_com_LThumb.jpg?t=63704517372',
                'IsTeamLeader':false,
                'Team': 'NO'
                },
                {
                'Name': 'Douglas Borrero Villamizar',
                'Role': 'ATTG Dev Manager',
                'Birthday': '11/6/2019',
                'FunFact': 'A veces compro 1 metro de plástico de envolver, solo para reventar las burbujas',
                'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
                'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/douglas_f_borrero_villamizar_gds_ey_com_LThumb.jpg?t=63727904725',
                'IsTeamLeader': true,
                'Team': 'ATTG Dev'
                },
                {
                'Name': '	Lorena Wolczanski',
                'Role': 'ATTG Finance Manager',
                'Birthday': '14/11/2019',
                'FunFact': '	Siempre digo que mi sueño es tener un puesto de Coca Cola en alguna playa paradisiaca',
                'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
                'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/lorena_b_wolczanski_gds_ey_com_LThumb.jpg?t=63701578620',
                'IsTeamLeader': true,
                'Team': 'ATTG Finance'
                },
                {
                'Name': 'Patricia Pessoa',
                'Role': 'ATTG PMO Manager',
                'Birthday': '03/27/1996',
                'FunFact': 'Me gusta hacer videos de TikTok, la lectura, ver series y hacer DIY',
                'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
                'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/patricia_pessoa_de_oliveira_gds_ey_com_LThumb.jpg?t=63738209243',
                'IsTeamLeader': true,
                'Team': 'ATTG PMO'
                },
                {
                  'Name': 'Gustavo Orteu',
                  'Role': 'FSO Manager',
                  'Birthday': '30/06/2019',
                  'FunFact': 'Una vez me olvidé las llaves de casa y entré por la ventana colgándome desde la terraza (¡vivo en un 7mo piso!)',
                  'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
                  'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/Gustavo_Orteu_gds_ey_com_LThumb.jpg?t=63738296118',
                  'IsTeamLeader': true,
                  'Team': 'FSO'
                },
                {
                'Name': 'Gustavo Orteu',
                'Role': 'GTP Manager',
                'Birthday': '30/06/2019',
                'FunFact': 'Una vez me olvidé las llaves de casa y entré por la ventana colgándome desde la terraza (¡vivo en un 7mo piso!)',
                'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
                'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/Gustavo_Orteu_gds_ey_com_LThumb.jpg?t=63738296118',
                'IsTeamLeader': true,
                'Team': 'GTP'
                }
              ]
            }
          ]
        },
        {
          TeamName: "ATTG Dev Team",
          SubTeams: 
          [
            {
              SubTeamName: 'ATTG Dev Manager',
              SubTeamMembers: 
              [
                {
                'Name': 'Douglas Borrero Villamizar',
                'Role': 'ATTG Dev Manager',
                'Birthday': '11/6/2019',
                'FunFact': 'A veces compro 1 metro de plástico de envolver, solo para reventar las burbujas',
                'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
                'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/douglas_f_borrero_villamizar_gds_ey_com_LThumb.jpg?t=63727904725',
                'IsTeamLeader': true,
                'Team': 'Tax Technology and Transformation'
                }
              ]
            },
            {
              SubTeamName: 'ADMN',
              SubTeamMembers: 
              [
                {
                'Name': 'Ruben Cordero',
                'Role': '.Net Dev Lead',
                'Birthday': '03/27/1996',
                'FunFact': 'Empecé a nadar porque una vez hace 5 años, casi me ahogo en Brasil. Y a partir de ese momento dije que no podía pasarme de nuevo.',
                'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
                'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/ruben_cordero_gds_ey_com_LThumb.jpg?t=63673764058',
                'IsTeamLeader': false,
                'Team': 'NO'
                },
                {
                'Name': 'Harold Reyes',
                'Role': '.Net Dev',
                'Birthday': '03/27/1996',
                'FunFact': 'Me gusta Correr, las Artes marciales y estudiar',
                'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
                'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/harold_t_cesar_reyes_gds_ey_com_LThumb.jpg?t=63696547813',
                'IsTeamLeader': false,
                'Team': 'NO'
                },
                {
                'Name': 'Juan Ignacio Boccardo',
                'Role': '.Net Dev',
                'Birthday': '21/2/2019',
                'FunFact': 'Soy zurdo. Mi familia, amigos y conocidos me dicen Lolo (me pueden decir así)',
                'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
                'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/juan_ignacio_boccardo_gds_ey_com_LThumb.jpg?t=63718847395',
                'IsTeamLeader': false,
                'Team': 'NO'
                },
                {
                  'Name': 'Fabian Rico',
                  'Role': '.Net Dev',
                  'Birthday': '27/03/1996',
                  'FunFact': 'Una vez me tiré de una piedra alta en la playa (aprox un 2 piso) por diversión, y el lugar donde caías era un hueco (en el mar) rodeado de piedras.',
                  'LinkedinLink': 'https://www.instagram.com/Rickyspanishok/',
                  'ProfileImage': 'https://people.ey.com/User%20Photos/Profile%20Pictures/fabian_d_rico_vargas_gds_ey_com_LThumb.jpg?t=63705185466',
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
