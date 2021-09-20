import { Soru } from "./soru";

export class EsitsizlikRepository{
    static getSorular(): Soru[] {
      throw new Error('Method not implemented.');
    }
    private sorular:Soru[];

    constructor(){
        this.sorular=[ 
            {id: 2018, title: "2018-TYT", description: "42c.png", imageUrl: "26.png"},
            {id: 2018, title: "2018-TYT", description: "43c.png", imageUrl: "27.png"},
            {id: 2019, title: "2019-TYT", description: "44c.png", imageUrl: "28.png"},
            {id: 2019, title: "2019-TYT", description: "45c.png", imageUrl: "29.png"},
            {id: 2019, title: "2019-TYT", description: "46c.png", imageUrl: "30.png"},
            {id: 2020, title: "2020-TYT", description: "47c.png", imageUrl: "32.png"},
            {id: 2020, title: "2020-TYT", description: "48c.png", imageUrl: "33.png"},
            {id: 2021, title: "2021-TYT", description: "49c.png", imageUrl: "34.png"},
            {id: 2021, title: "2021-TYT", description: "50c.png", imageUrl: "35.png"}
        ] 
    }

    getSorular(): Soru[]{
        return this.sorular;
    }

    getSoruById(id:number): Soru{
        return this.sorular.find(i=>i.id==id);
    }
}