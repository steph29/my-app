import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-passions',
  templateUrl: './passions.component.html',
  styleUrls: ['./passions.component.scss'],
})
export class PassionsComponent implements OnInit {
  contentItem = [
    {
      contentId: 0,
      contentTitle: "l'aéronautique",
      contentText:
        'Passionné depuis tout petit par tout ce qui vole dans le ciel, ',
    },
    {
      contentId: 1,
      contentTitle: 'la course à pied',
      contentText:
        "Pour les sites de Terre en Vie, j'ai utilisé MySQL. Utilisation des clés externes, sessions, page login / password sécurisée, page mon compte extractant les créneaux de bénévolats de fonction de la personne qui se connecte, mailing. J'ai également une formation sur MongoDB. Coté langage, j'ai une bonne connaissance de PHP, mais j'ai une appétance pour NodeJS et ExpressJS. Découverte de Symfony 4.",
    },
    {
      contentId: 2,
      contentTitle: 'la vie',
      contentText: '',
    },
    {
      contentId: 3,
      contentTitle: "l'écologie",
      contentText:
        "Engagé de la première heure, je m'investi dans les associations comme Terre en Vie, pour défendre l'écologie et l'environnement. Directeur de l'entreprise Baladoù, nous avons créé un carnet de randonnées itinérant pour découvrir le pays de Vannes autrement",
    },
  ];
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
