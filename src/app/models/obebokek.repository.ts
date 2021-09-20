import { Soru } from "./soru";

export class ObebokekRepository{
    static getSorular(): Soru[] {
      throw new Error('Method not implemented.');
    }
    private sorular:Soru[];

    constructor(){
        this.sorular=[ 
            {id: 2018, title: "2018-TYT", description: "15c.png", imageUrl: "15.png"},
            {id: 2018, title: "2018-TYT", description: "16c.png", imageUrl: "16.png"},
            {id: 2018, title: "2018-TYT", description: "17c.png", imageUrl: "17.png"},
            {id: 2019, title: "2019-TYT", description: "18c.png", imageUrl: "18.png"},
            {id: 2019, title: "2019-TYT", description: "19c.png", imageUrl: "19.png"},
            {id: 2019, title: "2019-TYT", description: "20c.png", imageUrl: "20.png"},
            {id: 2020, title: "2020-TYT", description: "21c.png", imageUrl: "21.png"},
            {id: 2020, title: "2020-TYT", description: "22c.png", imageUrl: "22.png"},
            {id: 2021, title: "2021-TYT", description: "23c.png", imageUrl: "23.png"}
            
        ] 
    }

    getSorular(): Soru[]{
        return this.sorular;
    }

    getSoruById(id:number): Soru{
        return this.sorular.find(i=>i.id==id);
    }
}