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
        "Passionné depuis tout petit par tout ce qui vole dans le ciel, j'en ai fait mon métier. 10 années durant, j'ai été navigateur aérien au sein de la Marine Nationale. C'est un métier passionnant, rigoureux, et très enrichissant. ",
      contentIcon: '/assets/images/paper-plane.png',
    },
    {
      contentId: 1,
      contentTitle: 'la course à pied',
      contentText:
        "Ben oui, faut bien compenser les bons apéros ! Adepte des petites courses entre 10 et 15 km, j'essaie de courir en moyenne 1 à 2 fois par semaine. Le plus dur? c'est de se lancer, mais une fois parti, rien ne m'arrête !",
      contentIcon: '/assets/images/sneakers.png',
    },
    {
      contentId: 2,
      contentTitle: 'la vie',
      contentText:
        "Que ce soit entre copains autour d'une bière locale, avec ma chérie dans un hamac au bord de la mer, j'aime profiter de chaque instant. ",
      contentIcon: '/assets/images/wave.png',
    },
    {
      contentId: 3,
      contentTitle: "l'écologie",
      contentText:
        "Engagé de la première heure, je m'investi dans les associations comme Terre en Vie, pour défendre l'écologie et l'environnement. Directeur de l'entreprise Baladoù, nous avons créé un carnet de randonnées itinérant pour découvrir le pays de Vannes autrement. Également bénévoles dans une épicerie associative, je donne régulièrement de mon temps pour les valeurs que je souhaite défendre : l'environnement, le local et le partage. Si vous vous reconnaissez dans ces mots, nou sommes fait pour travailler ensemble. ",
      contentIcon: '/assets/images/recycle.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
