import { Component, OnInit } from '@angular/core';
import { CarpanRepository } from '../models/carpan.repository';
import { Soru } from '../models/soru';

@Component({
  selector: 'app-carpan',
  templateUrl: './carpan.component.html',
  styleUrls: ['./carpan.component.css']
})
export class CarpanComponent implements OnInit {
  sorular:Soru[];
  carpanRepository:CarpanRepository;

  filterText:string ="";
  constructor() { 
    this.carpanRepository=new CarpanRepository();
    this.sorular=this.carpanRepository.getSorular();

  }

  ngOnInit(): void {
  }

}
