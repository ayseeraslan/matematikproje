import { Soru } from "./soru";

export class CarpanRepository{
    static getSorular(): Soru[] {
      throw new Error('Method not implemented.');
    }
    private sorular:Soru[];

    constructor(){
        this.sorular=[ 
            {id: 2018, title: "2018-TYT", description: "36c.png", imageUrl: "36.png"},
            {id: 2018, title: "2018-TYT", description: "37c.png", imageUrl: "37.png"},
            {id: 2019, title: "2019-TYT", description: "38c.png", imageUrl: "38.png"},
            {id: 2019, title: "2019-TYT", description: "39c.png", imageUrl: "39.png"},
            {id: 2019, title: "2019-TYT", description: "40c.png", imageUrl: "40.png"},
            {id: 2020, title: "2020-TYT", description: "41c.png", imageUrl: "41.png"}
        ] 
    }

    getSorular(): Soru[]{
        return this.sorular;
    }

    getSoruById(id:number): Soru{
        return this.sorular.find(i=>i.id==id);
    }
}