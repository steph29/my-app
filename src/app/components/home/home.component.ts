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
      cardTitle: "#frontend",
      cardBody:
        "Je vous propose un beau site rempli de HTML5 - CSS3, Bootstrap animé de Javascript. Le tout mené par l’exploitation d’API REST et Angular. Parce que votre site est la première image de vous, celui-ci doit vous ressembler le plus possible. Avoir son propre univers ce n'est pas juste une question de goût et de couleur. Il doit faire passer le bon message et marquer les esprits en un seul coup de regard.",
    },
    {
      cardTitle: '#backend',
      cardBody:
        'Un site beau, c’est bien, quand il est fonctionnel c’est mieux !  C’est pourquoi j\'utilise pour discuter avec les serveurs du PHP, du NodeJS et des bases de données tels que MySql et MongoDB.',
    },
    {
      cardTitle: '#mobile',
      cardBody:
        'De la cuisson des oeufs en passant par la météo du jour et vos futures discutions par chat, je développe vos applications sur-mesure en fonction de vos besoins. Flutter est mon meilleur allié pour produire sur IOS et Android. La géolocalisation, l’authentification, la persistance et les bases de données remplissent mon carnet de compétences et augmente les possibilités !',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
