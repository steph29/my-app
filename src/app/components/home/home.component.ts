import { AotSummaryResolver } from '@angular/compiler';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Subject } from 'rxjs';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cardContainerMenu = [
    {
      cardTitle: 'Création',
      cardBody:
        "Parce que votre site est la première image de vous, celui-ci doit vous ressembler le plus possible. Avoir sa propre identité visuelle ce n'est pas juste une question de goût sur les couleurs. Elle doit faire passer le bon message et marquer les esprits en un seul coup de regard.",
      cardImage: '/assets/images/nature3.jpg',
    },
    {
      cardTitle: 'Sécurité',
      cardBody:
        "La sécurisation des données personnelles est devenue un enjeu majeur pour les utilisateurs et les entreprises lors de leur navigation sur le web. Les infrastructures d'hébergement de nos sites, c'est-à-dire les serveurs, sont optimisés pour une haute sécurité. Nous mettons tout en oeuvre pour permettre un temps de réponse rapide de votre site. (HTTPS, HSTS, CSP, X-XSS...) Nous utilisons tous les outils disponibles pour assurer une fiabilité de performance de votre site. Nous fournissons un audit mensuel sur cette prestation.",
      cardImage: '/assets/images/nature1.jpg',
    },
    {
      cardTitle: 'Optimisation',
      cardBody:
        'Nous développons votre site et utilisons tous les outils à notre disposition pour rendre votre site internet "ULTRA PERFORMANT". Nous travaillons sur l\'optimisation du temps de chargement des pages et sur la sécurité de votre projet. ',
      cardImage: '/assets/images/nature2.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
