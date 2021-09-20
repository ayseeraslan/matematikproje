import { Component, OnInit } from '@angular/core';
import { Soru } from '../models/soru';
import { SoruRepository } from '../models/soru.repository';


@Component({
  selector: 'app-uslusayilar',
  templateUrl: './uslusayilar.component.html',
  styleUrls: ['./uslusayilar.component.css']
})
export class UslusayilarComponent implements OnInit {

  sorular:Soru[];
  soruRepository:SoruRepository;

  filterText:string ="";
  

  constructor() { 
    this.soruRepository=new SoruRepository();
    this.sorular=this.soruRepository.getSorular();

  }

  ngOnInit(): void {
  }

  

}
