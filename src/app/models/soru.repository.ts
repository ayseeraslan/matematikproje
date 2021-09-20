import { Soru } from "./soru";

export class SoruRepository{
    private sorular:Soru[];

    constructor(){
        this.sorular=[ 
            {id: 2018, title: "2018-TYT", description: "1c.png", imageUrl: "1.png"},
            {id: 2018, title: "2018-TYT", description: "2c.png", imageUrl: "2.png"},
            {id: 2018, title: "2018-TYT", description: "3c.png", imageUrl: "3.png"},
            {id: 2018, title: "2018-TYT", description: "4c.png", imageUrl: "4.png"},
            {id: 2018, title: "2018-TYT", description: "5c.png", imageUrl: "5.png"},
            {id: 2019, title: "2019-TYT", description: "7c.png", imageUrl: "7.png"},
            {id: 2019, title: "2019-TYT", description: "11c.png", imageUrl: "11.png"},
            {id: 2019, title: "2019-TYT", description: "12c.png", imageUrl: "12.png"},
            {id: 2019, title: "2019-TYT", description: "13c.png", imageUrl: "13c.png"},
            {id: 2019, title: "2019-TYT", description: "14c.png", imageUrl: "14.png"},
            {id: 2019, title: "2019-TYT", description: "2c.png", imageUrl: "2.png"},
            {id: 2020, title: "2020-TYT", description: "2c.png", imageUrl: "2.png"},
            {id: 2020, title: "2020-TYT", description: "2c.png", imageUrl: "2.png"},
            {id: 2020, title: "2020-TYT", description: "2c.png", imageUrl: "2.png"},
            {id: 2020, title: "2020-TYT", description: "2c.png", imageUrl: "2.png"},
            {id: 2020, title: "2020-TYT", description: "2c.png", imageUrl: "2.png"},
            {id: 2021, title: "2021-TYT", description: "2c.png", imageUrl: "2.png"},
            {id: 2021, title: "2021-TYT", description: "2c.png", imageUrl: "2.png"},
            {id: 2021, title: "2021-TYT", description: "2c.png", imageUrl: "2.png"}

        ] 
    }

    getSorular(): Soru[]{
        return this.sorular;
    }

    getSoruById(id:number): Soru{
        return this.sorular.find(i=>i.id==id);
    }
}