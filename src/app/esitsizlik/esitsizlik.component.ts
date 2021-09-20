import { Component, OnInit } from '@angular/core';
import { EsitsizlikRepository } from '../models/esitsizlik.repository';
import { Soru } from '../models/soru';

@Component({
  selector: 'app-esitsizlik',
  templateUrl: './esitsizlik.component.html',
  styleUrls: ['./esitsizlik.component.css']
})
export class EsitsizlikComponent implements OnInit {
  sorular:Soru[];
  esitsizlikRepository:EsitsizlikRepository;

  filterText:string ="";
  constructor() { 
    this.esitsizlikRepository=new EsitsizlikRepository();
    this.sorular=this.esitsizlikRepository.getSorular();
  }

  ngOnInit(): void {
  }

}
