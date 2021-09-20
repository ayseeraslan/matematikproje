import { Soru } from "./soru";

export class FaizproblemRepository{
    static getSorular(): Soru[] {
      throw new Error('Method not implemented.');
    }
    private sorular:Soru[];

    constructor(){
        this.sorular=[ 
           
        ] 
    }

    getSorular(): Soru[]{
        return this.sorular;
    }

    getSoruById(id:number): Soru{
        return this.sorular.find(i=>i.id==id);
    }
}