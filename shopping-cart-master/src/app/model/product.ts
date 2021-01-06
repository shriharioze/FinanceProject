export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    imageurl:string;

    constructor(id,name,description ="", price,imageurl="https://foremostlist.com/wp-content/uploads/2020/01/TJDYpZN3r8B7onh2imuNah-1200-80.jpg"){
        this.id=id
        this.name=name
        this.description=description
        this.price=price
        this.imageurl=imageurl
    }
}
