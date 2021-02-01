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
      contentTitle: 'Frontend',
      contentText:
        "Bonne maitrise de HTML, CSS, Bootstrap, JS. J'utilise les framework Angular. J'ai une sensibilité aux UX/UI avec l'envie de faire des sites web moderne, dynamique, et léger afin de réduire l'impact environnemental. Création du site d'inscription de Terre en Vie, du site mon site cv, des sites d'evaluation pour Digital Campus Studi, de site d'entrainement sur Front-end Mentor. Bonne connaissance de l'emploi des API ( IP- tracker utilise l'API https://geo.ipify.org/).",
    },
    {
      contentId: 1,
      contentTitle: 'Backend',
      contentText:
        "Pour les sites de Terre en Vie, j'ai utilisé MySQL. Utilisation des clés externes, sessions, page login / password sécurisée, page mon compte extractant les créneaux de bénévolats de fonction de la personne qui se connecte, mailing. J'ai également une formation sur MongoDB. Coté langage, j'ai une bonne connaissance de PHP, mais j'ai une appétance pour NodeJS et ExpressJS. Découverte de Symfony 4.",
    },
    {
      contentId: 2,
      contentTitle: 'Mobile',
      contentText:
        "La création de John d'oeuf est faite sur Flutter afin de le distribuer sur les plateformes iOS et Android. Néanmoins j'ai ungoût prononcé pour iOS et XCode. Utilisation sur XCode et Flutter d'API ( appli météo), création d'une messagerie simple type whatsapp, persistence de donnée ( appli de liste de courses)",
    },
  ];
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
