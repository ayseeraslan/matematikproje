import { Component, OnInit } from '@angular/core';
import { KoklusayiRepository } from '../models/koklusayi.repository';
import { Soru } from '../models/soru';

@Component({
  selector: 'app-koklusayilar',
  templateUrl: './koklusayilar.component.html',
  styleUrls: ['./koklusayilar.component.css']
})
export class KoklusayilarComponent implements OnInit {
  sorular:Soru[];
  koklusayiRepository:KoklusayiRepository;

  filterText:string ="";
  constructor() {
    this.koklusayiRepository=new KoklusayiRepository ();
    this.sorular=this.koklusayiRepository.getSorular();
   }

  ngOnInit(): void {
  }

}
