import { Component, OnInit } from '@angular/core';
import { FaizproblemRepository } from '../models/faizproblem.repository';
import { Soru } from '../models/soru';

@Component({
  selector: 'app-faizproblem',
  templateUrl: './faizproblem.component.html',
  styleUrls: ['./faizproblem.component.css']
})
export class FaizproblemComponent implements OnInit {
  sorular:Soru[];
  faizproblemRepository:FaizproblemRepository;

  filterText:string ="";
  constructor() {
    this.faizproblemRepository=new FaizproblemRepository();
    this.sorular=this.faizproblemRepository.getSorular();
   }

  ngOnInit(): void {
  }

}
