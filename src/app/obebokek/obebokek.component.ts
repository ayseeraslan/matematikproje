import { Component, OnInit } from '@angular/core';
import { ObebokekRepository } from '../models/obebokek.repository';
import { Soru } from '../models/soru';

@Component({
  selector: 'app-obebokek',
  templateUrl: './obebokek.component.html',
  styleUrls: ['./obebokek.component.css']
})
export class ObebokekComponent implements OnInit {
  sorular:Soru[];
  obebokekRepository:ObebokekRepository;

  filterText:string ="";
  constructor() { 
    this.obebokekRepository=new ObebokekRepository();
    this.sorular=this.obebokekRepository.getSorular();
  }

  ngOnInit(): void {
  }

}
